import { fade } from '@material-ui/core';
import styled from 'styled-components';

interface Props {
  isTopPage: boolean;
}
const augNav = `
--aug-b-extend1: 60px;
--aug-b: 6px;
--aug-br: 10px;
--aug-bl: 10px;
--aug-border: initial;
--aug-border-bottom: 4px;
--aug-border-top: 0.01px;
--aug-border-left: 0.01px;
--aug-border-right: 0.01px;

`;
export const NavbarContainer = styled.nav<Props>`
  transition: 0.2s linear;
  background-color: ${({ isTopPage, theme }) =>
    isTopPage ? 'transparent' : `${theme.mainBg}`};

  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 9;
  svg {
    margin-right: 5px;
    color: ${({ isTopPage, theme }) =>
      isTopPage ? theme.navbarTxtTop : theme.navbarTxt};
  }
  ${({ isTopPage }) => (isTopPage ? '' : augNav)}
  --aug-border-bg: radial-gradient(
  circle,
  ${({ theme }: any) => fade(theme.playerMain, 0.8)} 35%,
  rgba(11, 10, 10, 0.8872408826811975) 100%
);
`;
export const NavbarContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;
export const NavOptionsContainer = styled.div<Props>`
  display: flex;
  align-items: center;
  color: ${({ isTopPage, theme }) =>
    isTopPage ? theme.navbarTxtTop : theme.navbarTxt};
  & > *:not(:last-child) {
    margin-right: 25px;
  }
`;
