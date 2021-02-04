import { createGlobalStyle } from 'styled-components';

import { animations } from './basics/animations';
import { helpers } from './basics/helpers';
import { typography } from './basics/typography';
import { GlobalVars } from './basics/vars';

export const neon = (sh2 = '#FF00DE', sh1 = '#FFFFFF') => `
color: ${sh1};
text-shadow:
    0 0 5px ${sh1},
    0 0 10px ${sh1},
    0 0 15px ${sh2},
    0 0 25px ${sh2},
    0 0 50px ${sh2};
`
export const remConverter = (pix) => {
  return +pix / 16 + 'rem';
}
export const retroTvEffect = `
animation:retro-future-tv-lines linear infinite ;
animation-duration: 500ms;
--playstate: var(--media-prefers-reduced-motion) paused;
animation-play-state: var(--playstate, running);
-webkit-mask-image: repeating-linear-gradient(black,black 0.5rem,rgb(0 0 0 / 0%) 0.75rem);
`;
export const GlobalStyles = createGlobalStyle`
${animations}
${typography}
${helpers}

* {
  box-sizing: border-box;
  outline-style: none;
  margin: 0;
  padding: 0;
}
html {
  ${'' /* font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width]))); */}
  font-size: calc(10px + (12 - 10) * ((100vw - 300px) / (1920 - 300)));

}
body {
 ${({ theme }) => theme.materialBg};
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
[data-tooltip] {
  position: relative;
}

[data-tooltip]:hover:after {
  content: attr(data-tooltip);
  position: absolute;
  top: 175%;
  left: 25px;
  font-size: 1rem;
  width: max-content;
  padding: 5px 10px;
  color: #f1f1f1;
  background-color: rgba(#333333, 0.65);
  border-radius: 5px;
  animation: tooltip-animation 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  z-index: 999;
}
.typing {
  color:${GlobalVars.blueMain};
}
.typing-animation {animation:pulsate-bck .5s ease-in-out infinite both}
.scale-in-tr{animation:scale-in-tr .3s cubic-bezier(.25,.46,.45,.94) both}
.scale-in-tl{animation:scale-in-tl .3s cubic-bezier(.25,.46,.45,.94) both}
  `


