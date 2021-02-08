import { darken } from '@material-ui/core';
import styled from 'styled-components';

interface Props {}
export const SelectStyle = styled.select<Props>`
  padding: 15px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.mainTxt};
`;
export const SelectOption = styled.option<Props>``;
