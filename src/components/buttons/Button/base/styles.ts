import { styled } from '@mui/material/styles';

import BaseButton from '.';

export const CustomButton = styled(BaseButton)`
  width: ${(props) => (props.fullwidth ? '100%' : 'auto')};
  color: ${(props) => (props.color ? props.color : '#FFF')};
  background: ${(props) => (props.background ? props.background : '#0364FF')};
  max-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap !important;
  align-items: center;
  padding: 1rem 0.6rem;
  margin: 0 0.2rem;
  border: 0;
  font-size: 80%;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;

  &:focus {
    outline: 1px solid #eee;
  }

  & i {
    padding-right: 10px;
  }
`;
