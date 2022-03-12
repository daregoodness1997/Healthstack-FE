import React, { useState } from 'react';

import { TableMenu } from '../../../styles/global';
import { FullDetailsWrapper, PageWrapper } from '../../app/styles';
import Button from '../../buttons/Button';
import CustomTable from '../../customtable';
import Input from '../../inputs/basic/Input';
import FilterMenu from '../FilterMenu';
import Document from './FormBox';

const Orders = ({ onClick: _onClick, schema, data }) => {
  const [open, setOpen] = useState(false);
  return (
    <PageWrapper className="attend-wrapper p-1">
      <FullDetailsWrapper className="attend attend-large">
        <TableMenu>
          <div className="inner-table">
            <Input placeholder="Search here" label="Search here" size="small" />
            <FilterMenu />
          </div>
          <Button label="Add new" onClick={() => setOpen(true)} />
        </TableMenu>
        <CustomTable columns={schema} data={data} pointerOnHover highlightOnHover striped selectable />
      </FullDetailsWrapper>
      {open && (
        <FullDetailsWrapper className="attend attend-medium">
          <Document schema={schema} onCancel={() => setOpen(false)} onSubmit={() => {}} />
        </FullDetailsWrapper>
      )}
    </PageWrapper>
  );
};

export default Orders;