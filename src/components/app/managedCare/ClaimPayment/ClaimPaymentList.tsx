import React from 'react';

import { TableMenu } from '../../../../styles/global';
import AccordionBox from '../../../accordion';
import CustomTable from '../../../customtable';
import Input from '../../../inputs/basic/Input';
import { PageWrapper } from '../../styles';
import { columnHead, dataTree } from './data';

interface Props {
  handleCreate?: () => void;
  onRowClicked?: (row: any, event: any) => void;
}

const ClaimPayments: React.FC<Props> = ({ onRowClicked }) => {
  return (
    <PageWrapper>
      <h2>ClaimPayments</h2>

      <TableMenu>
        <div className="inner-table">
          <Input placeholder="Search here" label="Search here" size="small" />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <span>Filer by</span>
            <i className="bi bi-chevron-down"></i>
          </div>
        </div>
      </TableMenu>

      <div style={{ width: '100%', height: '600px', overflow: 'auto' }}>
        {dataTree.map((data, index) => (
          <AccordionBox title={data.title} key={index}>
            {data.children.map((child, index) => {
              return (
                <AccordionBox key={index} title={child.title}>
                  <CustomTable
                    title={child.description}
                    columns={columnHead}
                    data={child.data}
                    pointerOnHover
                    highlightOnHover
                    striped
                    onRowClicked={onRowClicked}
                  />
                </AccordionBox>
              );
            })}
          </AccordionBox>
        ))}
      </div>
    </PageWrapper>
  );
};

export default ClaimPayments;
