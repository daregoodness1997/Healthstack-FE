import React from 'react';
import { useForm } from 'react-hook-form';

import Button from '../../../../components/buttons/Button';
import DynamicInput from '../../../../components/inputs/DynamicInput';
import { ButtonGroup } from '../../../../ui/styled/global';
import { EmployeeSchema } from '../../schema/ModelSchema';
import { BottomWrapper, GrayWrapper, GridWrapper, HeadWrapper, PageWrapper } from '../../styles';

const EmployeeModify = ({ cancelEditClicked, onSubmit, row: employee, backClick }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: employee,
  });

  return (
    <PageWrapper>
      <GrayWrapper>
        <HeadWrapper>
          <div>
            <h2>Employee Details</h2>
            <span>Below are your employee’s details</span>
          </div>
          <ButtonGroup>
            <Button label="Back to List" background="#fdfdfd" color="#333" onClick={backClick} />
            <Button
              label="Cancel Editing"
              background="#f2f2f2"
              color="#333"
              showicon
              icon="bi bi-pen-fill"
              onClick={cancelEditClicked}
            />
          </ButtonGroup>
        </HeadWrapper>

        <form onSubmit={handleSubmit(onSubmit)}>
          <GridWrapper>
            {EmployeeSchema.map((client, index) => (
              <DynamicInput
                key={index}
                name={client.key}
                control={control}
                label={client.name}
                inputType={client.inputType}
              />
            ))}
          </GridWrapper>

          <BottomWrapper>
            <Button label="Delete Employee" background="#FFE9E9" color="#ED0423" />
            <Button label="Save Employee" />
          </BottomWrapper>
        </form>
      </GrayWrapper>
    </PageWrapper>
  );
};

export default EmployeeModify;
