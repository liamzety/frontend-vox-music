import { darken } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
interface Props {
  type:string
}
export const AlertModalStyle = styled.div<Props>`
bottom: 15px;
right: 15px;
position: fixed;
display: flex;
align-items:center;
justify-content:center;
background-color: ${GlobalVars.blackSecondary};
box-shadow: 0 0 10px 0px #00000094;
z-index: 10;
border-bottom: 4px solid ${darken(GlobalVars.blackMain,0.5)};
border-radius: 10px;
transition: .25s transform linear;
color:${({theme,type}) => theme[type]};

.icon-container {
  background-color: ${GlobalVars.blackTertiary};
  padding: 15px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}

.msg-container {
  padding: 15px;
}

&.show-msg {
  transform: translateX(0);

}

&.hide-msg {
  transform: translateX(300px);
}

`