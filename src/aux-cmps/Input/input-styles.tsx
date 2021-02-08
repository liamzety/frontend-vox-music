import { darken, fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

interface Props {
  uppercase?: boolean;
  secondary?: boolean;
}
export const InputStyle = styled.input<Props>`
  padding: 10px;
  width: 100%;
  max-width: 800px;
  background: transparent;
  border: 2px solid
    ${({ theme, secondary }) =>
      secondary ? GlobalVars.pinkMain : theme.inputBorder};

  color: ${({ theme, secondary }) =>
    secondary ? GlobalVars.pinkMain : theme.inputTxt};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : '')};
  font-family: Tomorrow-Regular;

  &::placeholder {
    color: ${({ theme, secondary }) =>
      secondary ? GlobalVars.pinkMain : theme.inputTxt};
    font-family: Bicubik;
  }
`;
export const InputContainer = styled.div``;
