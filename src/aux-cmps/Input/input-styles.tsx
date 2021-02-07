import { darken, fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

export const InputStyle = styled.input`
  padding: 10px;
  width: 100%;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.inputBorder};
  background: ${({ theme }) => theme.inputBackgrund};
  color: ${({ theme }) => theme.inputTxt};
  font-family: Bicubik;

  &::placeholder {
    color: ${({ theme }) => theme.inputTxt};
    font-family: Bicubik;
  }
`;
export const InputContainer = styled.div``;
