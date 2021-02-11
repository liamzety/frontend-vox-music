import Bicubik from '../../font/Bicubik.otf';
import TomorrowRegular from '../../font/Tomorrow-Regular.ttf';
import MPLUS from '../../font/MPLUS1p-Regular.ttf';

export const typography = `
  @font-face {
    font-family: Bicubik;
    src: url(${Bicubik});
  }
  @font-face {
    font-family: Tomorrow-Regular;
    src: url(${TomorrowRegular});
  }
  @font-face {
    font-family: MPLUS;
    src: url(${MPLUS});
    unicode-range: U+0590-05FF,U+0370-03FF, U+1F00-1FFF;
  }
`