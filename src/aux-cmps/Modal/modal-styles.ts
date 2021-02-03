import { fade, lighten } from '@material-ui/core';
import styled from 'styled-components';

interface ModalStylesProps {
  position?: string;
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  hideBorderTop?: boolean;
}
export const ModalStyles = styled.div<ModalStylesProps>`
  position: fixed;
  background-color: ${({ theme }) => theme.mainModal};
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 50vw;
  height: 50vh;
  z-index: 11;
  @media (max-width: 1080px) {
    width: 90vw;
  }
`;
