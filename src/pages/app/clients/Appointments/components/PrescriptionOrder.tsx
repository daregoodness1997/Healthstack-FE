import { Portal } from '@mui/base';
import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { useForm } from 'react-hook-form';

import Button from '../../../../../components/buttons/Button';
import CustomTable from '../../../../../components/customtable';
import Input from '../../../../../components/inputs/basic/Input';
import DynamicInput from '../../../../../components/inputs/DynamicInput';
import ModalBox from '../../../../../components/modal';
import { TableMenu } from '../../../../../ui/styled/global';
import { PrescriptionOrderSchema } from '../../../schema';
import { FullDetailsWrapper, PageWrapper } from '../../../styles';
import { columnLab, labData } from '../data';

const PrescriptionOrder = () => {
  const { control, handleSubmit, reset } = useForm();
  const [showModal, setShowModal] = useState(false);
  const [tests, setTests] = useState([]);

  const onAddTest = (test) => {
    setTests([...tests, test]);
    console.error({ test });
    const obj = {};
    PrescriptionOrderSchema.forEach((obj) => (obj[obj.key] = ''));
    reset(obj);
  };

  return (
    <PageWrapper>
      <TableMenu>
        <div className="inner-table">
          <Input placeholder="Search here" label="Search here" />
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span>Filer by</span>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>

        <Button label="Add new" onClick={() => setShowModal(true)} />
      </TableMenu>
      <DataTable
        title="Lab Orders"
        columns={columnLab}
        data={labData}
        selectableRows
        pointerOnHover
        highlightOnHover
        striped
        style={{ overflow: 'hidden' }}
      />
      <Portal>
        <ModalBox open={showModal} onClose={() => setShowModal(false)}>
          <FullDetailsWrapper>
            <form onSubmit={handleSubmit(onAddTest)}>
              <h2>Add Prescription Order</h2>
              {PrescriptionOrderSchema.map((schema) => {
                return (
                  <DynamicInput
                    key={schema.key}
                    name={schema.key}
                    control={control}
                    label={schema.description}
                    inputType={schema.inputType}
                    options={schema.options || []}
                  />
                );
              })}
              <button
                style={{
                  borderRadius: '32px',
                  background: '#f3f3f3',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  cursor: 'pointer',
                }}
                type="submit"
              >
                +
              </button>
            </form>
          </FullDetailsWrapper>
          <CustomTable columns={PrescriptionOrderSchema} data={tests} />
        </ModalBox>
      </Portal>
    </PageWrapper>
  );
};

export default PrescriptionOrder;
