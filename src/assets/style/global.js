import { createGlobalStyle } from 'styled-components';

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

  `


