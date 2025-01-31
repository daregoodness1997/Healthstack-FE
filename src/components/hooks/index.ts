import { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { UserContext } from '../../context/context';
import client from '../../context/feathers';
import { Views } from '../../pages/app/Constants';
import { getFormStrings } from '../../pages/app/Utils';
import { DictionaryOf } from '../../types.d';

interface Repository<T> {
  list: T[];
  find: (_text) => Promise<T[]>;
  get: (_id) => Promise<T>;
  submit: (data: T) => Promise<T>;
  remove: (_id: T) => Promise<T>;
  user: {
    _id: string;
    firstname: string;
    lastname: string;
    currentEmployee: {
      facility: string;
      facilityDetail: { _id: string; facilityName: string };
    };
  };
  setFindQuery: (query) => void;
  facilityId: string | null;
}

const useRepository = <T>(modelName: string, onNavigate?: (view: string) => () => void): Repository<T> => {
  let Service = client.service(modelName);
  const { user } = useContext(UserContext);
  const [findQuery, setFindQuery] = useState({});
  const [list, setList] = useState([]);

  const remove = (obj): Promise<T> => {
    return Service.remove(typeof obj === 'string' ? obj : obj._id)
      .then((_) => {
        toast(`${modelName} deleted successfully`);
        onNavigate && onNavigate(Views.LIST)();
      })
      .catch((err) => {
        toast(`'Error deleting ${modelName}, probable network issues or ' + ${err}'`);
      });
  };

  const find = async (query?: any): Promise<T[]> => {
    const params = {
      query: {
        facility: user.stacker ? -1 : user.currentEmployee.facilityDetail._id,
        name: typeof query === 'string' && query ? { $regex: query, $options: 'i' } : undefined,
        $limit: 200,
        $sort: {
          createdAt: -1,
        },
      },
      ...findQuery,
      ...query,
    };
    console.debug('calling find with query  of model ', modelName, 'with parameters', params);
    return Service.find(params)
      .then((response) => {
        console.debug('received response of model ', modelName, ' with body ', { response });
        setList(response.data);
        return response;
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  const spreadSubData = (data): DictionaryOf<string> => {
    let result = {};
    Object.entries(data).map(([key, value]) => {
      if (typeof value === 'object' && !data.documentname) {
        result = { ...result, ...value };
      } else {
        result[key] = value;
      }
    });
    return result;
  };

  const submit = (dataIn) => {
    const data = spreadSubData(dataIn);
    const values = getFormStrings(data._id);
    console.debug('submitted data', JSON.stringify({ data }));
    if (user.currentEmployee) {
      data.facility = user.currentEmployee.facilityDetail._id;
    }

    return (data._id ? Service.update(data._id, data) : Service.create(data))
      .then(() => {
        onNavigate && onNavigate(Views.LIST)();
        toast(`${modelName.toUpperCase()} ${values.message}`);
      })
      .catch((err) => {
        toast.error(`Error occurred : ${err}`);
      });
  };

  const get = (id) => {
    return Service.get(id);
  };

  useEffect(() => {
    Service.on('created', find);
    Service.on('updated', find);
    Service.on('patched', find);
    Service.on('removed', find);
    find();
    return () => {
      Service = null;
    };
  }, []);

  useEffect(() => {
    find();
  }, [findQuery]);

  return {
    list,
    find,
    setFindQuery,
    remove,
    submit,
    get,
    user,
    facilityId: user?.currentEmployee?.facilityDetail?._id,
  };
};

export default useRepository;
