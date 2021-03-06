import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
interface Props {
  bgColor?: keyof typeof GlobalVars;
  border?: keyof typeof GlobalVars;
  color?: keyof typeof GlobalVars;
}
export const ButtonStyle = styled.button<Props>`
  font-family: Bicubik;
  border: 0;
  outline: none;
  background-color: ${({ border, theme }) =>
    border ? GlobalVars[border] : theme.mainBtnBorder};
  cursor: pointer;
  position: relative;
  font-size: 0.85rem;
  text-transform: uppercase;
  color: ${({ color, theme }) =>
    color ? GlobalVars[color] : theme.mainBtnTxt};
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
    background-color: ${({ bgColor, theme }) =>
      bgColor ? GlobalVars[bgColor] : theme.mainBtn};
    clip-path: polygon(92% 0, 100% 25%, 100% 100%, 8% 100%, 0% 75%, 0 0);
  }

  .btn-label {
    font-size: 0.8rem;
    position: absolute;
    bottom: -1px;
    right: 8%;
    padding: 0 5px;
    background-color: ${({ bgColor, theme }) =>
      bgColor ? GlobalVars[bgColor] : theme.mainBtn};
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
    background-color: ${({ bgColor, theme }) =>
      bgColor ? GlobalVars[bgColor] : theme.mainBtn};
    filter: drop-shadow(-2px 3px #67e3f3) drop-shadow(-1px -3px #02d8f3)
      drop-shadow(2px 1px #02d8f3);
  }

  &:hover .btn-glitch,
  &:hover .btn-content::after {
    display: block;
    animation: glitch-animation 2s linear 0s infinite;
  }
  &.btn-small {
    width: 120px;
    height: 40px;
    font-size: 0.8rem;
    .btn-label {
      font-size: 0.4rem;
    }
  }
  &.btn-medium {
    width: 180px;
    height: 50px;
    font-size: 0.85rem;
    .btn-label {
      font-size: 0.6rem;
    }
  }
  &.btn-large {
    width: 230px;
    height: 60px;
    font-size: 1rem;
    .btn-label {
      font-size: 0.8rem;
    }
  }
`;
