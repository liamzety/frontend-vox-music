import { createGlobalStyle } from 'styled-components';

export const GlobalVars = {
  whiteMain: '#e1dde4',
  blackMain: '#161616',
  redMain: '#ff003c',
  yellowMain: '#fcee09',

  whiteSecondary: '#cdc9d0',
  blackSecondary: '#333',

  whiteTertiary: '#dcdcdc',
  blackTertiary: '#252525',

  redTint: '#ff151529',
  yellowTint: '#fffa1526',
}
export const neon = (sh2 = '#FF00DE', sh1 = '#FFFFFF') => `
color: ${sh1};
text-shadow:
 
    0 0 5px ${sh1},
    0 0 10px ${sh1},
    0 0 15px ${sh2},
    0 0 25px ${sh2},
    0 0 50px ${sh2};
`

export const GlobalStyles = createGlobalStyle`

* {
  box-sizing: border-box;
  outline-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.2s linear, color 0ms;
}
body {
 background-image:url(${({ theme }) => theme.materialBg});
 background-size:150px;
 color:${({ theme }) => theme.mainTxt};
}


img {
  object-fit: cover;
}

a {
  color: inherit;
  text-decoration: none;
  cursor: pointer;

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


