import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalVars = {
  whiteMain: '#f1f1f1',
  blackMain: '#161616',
  redMain: '#ff003c',
  yellowMain: '#fcee09',

  whiteSec: '#e8e8e8',
  blackSec: '#333',


  whiteTertiary: '#dcdcdc',
  blackTertiary: '#252525'
}

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  outline-style: none;
  margin: 0;
  padding: 0;
  font-family: Tomorrow-Regular;
  transition: all 0.25s linear, color 0ms;
}

html {
  font-size: 16px;
}

img {
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    filter: brightness(75%);
  }
}
body {
 background:${({ theme }) => theme.mainBg};
 color:${({ theme }) => theme.mainTxt};
}
button {
  cursor: pointer;
  transition: 0.3s;
}

//tooltip
[data-title] {
  position: relative;
}

[data-title]:hover:after {
  content: attr(data-title);
  position: absolute;
  top: 175%;
  left: 25px;
  font-size: 1rem;
  width: max-content;
  padding: 5px 10px;
  color: #f1f1f1;
  background-color: rgba(#333333, 0.65);
  border-radius: 5px;
  animation: title-animation 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  z-index: 999;
}

.loader {
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

  `
export const Title = styled.h1`
  font-size:5.5rem;
  color: ${GlobalVars.yellowMain};
  `;
export const SubTitle = styled.h3`
font-size:2rem;
color: ${GlobalVars.yellowMain};
`;
export const MainButton = styled.button`
    width: 230px;
    height: 60px; 
    border: 0;
    outline: none;
    background-color: ${GlobalVars.blackMain};
    cursor: pointer;
    position: relative;
    font-size: .85rem;
    text-transform: uppercase;
    color: ${GlobalVars.blackMain};
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
    background-color: ${GlobalVars.yellowMain};
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
    
  }
  
  &.btn-secondary {
    background-color: ${GlobalVars.whiteTxtPrimary} ;
  }
  
  &.btn-secondary .btn-content {
    background-color: ${GlobalVars.redMain};
    color: ${GlobalVars.whiteTxtPrimary};
  }
  
  .btn-label {
    font-size: .40rem;
    position: absolute;
    bottom: -1px;
    right: 8%;
    padding: 0 5px;
    background-color: #fcee09;
    z-index: 3;
    border-left: 1px solid #00f0ff;
  }
  
  &.btn-secondary .btn-label {
    background-color: ${GlobalVars.whiteTxtPrimary};
    color: #050a0e;
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
`;
