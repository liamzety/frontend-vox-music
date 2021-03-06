import { darken } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
interface Props {
  type: keyof typeof GlobalVars;
}
export const AlertModalStyle = styled.div<Props>`
  bottom: 15px;
  right: 15px;
  margin-left: 15px;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: ${GlobalVars.blackSecondary};
  box-shadow: 0 0 10px 0px #00000094;
  z-index: 10;
  border-bottom: 4px solid ${darken(GlobalVars.blackMain, 0.5)};
  border-radius: 10px;
  transition: 0.45s transform;
  color: ${({ type }) => GlobalVars[type]};
  line-height: 1.5;

  .icon-container {
    background-color: ${GlobalVars.blackTertiary};
    padding: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  .msg-container {
    padding: 10px;
  }

  &.show-msg {
    transform: translateX(0);
  }

  &.hide-msg {
    transform: translateX(300px);
  }
`;
