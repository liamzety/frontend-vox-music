import styled from 'styled-components';

import { GlobalVars } from "../../global";
interface Props {
  bgColor:string,
  color:string
}
export const ButtonStyle = styled.button<Props>`
    
    border: 0;
    outline: none;
    background-color: ${props => props.bgColor === 'yellow' ? GlobalVars.blackMain : GlobalVars.whiteMain};
    cursor: pointer;
    position: relative;
    font-size: .85rem;
    text-transform: uppercase;
    color: ${props => props.color === 'black' ? GlobalVars.blackMain : GlobalVars.whiteMain};
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  
  .btn-content {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background-color: ${props => props.bgColor === 'yellow' ? GlobalVars.yellowMain : GlobalVars.redMain};
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    
  }
  

  
  .btn-label {
    font-size: .40rem;
    position: absolute;
    bottom: -1px;
    right: 8%;
    padding: 0 5px;
    background-color: ${props => props.bgColor === 'yellow' ? GlobalVars.yellowMain : GlobalVars.redMain};
    z-index: 3;
    border-left: 1px solid #00f0ff;
  }
  

  
  .btn-glitch {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fcee09;
    filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3) drop-shadow(2px 1px #02d8f3);
  }
  
  &.btn-secondary .btn-glitch {
    background-color: #ff003c;
  }
  
  &:hover .btn-glitch,
  &:hover .btn-content::after
 {
    display: block;
    animation: glitch-animation 2s linear 0s infinite;
  }
  &.btn-small {
    width: 120px;
    height: 40px; 
  }
  &.btn-medium {
    width: 180px;
    height: 50px; 
  }
  &.btn-large {
    width: 230px;
    height: 60px; 
  }
  `;