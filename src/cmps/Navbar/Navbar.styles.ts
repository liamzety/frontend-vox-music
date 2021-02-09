import { fade } from '@material-ui/core';
import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  transition: 0.2s linear;
  background-color: ${({ theme }) => theme.mainBg};
  position: fixed;
  width: 100%;
  height: 70px;
  z-index: 13;
  svg {
    margin-right: 5px;
    color: ${({ theme }) => theme.navbarTxt};
  }
  --aug-b-extend1: 60px;
  --aug-b: 6px;
  --aug-br: 10px;
  --aug-bl: 10px;
  --aug-border-all: 0px;
  --aug-border: initial;
  --aug-border-bottom: 4px;
  --aug-border-bg: radial-gradient(
    circle,
    ${({ theme }: any) => fade(theme.mainBorder, 0.8)} 35%,
    rgba(11, 10, 10, 0.8872408826811975) 100%
  );
`;

export const NavbarContainerInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .hamburger {
    display: none;
  }
  @media (max-width: 550px) {
    padding-left: 30px;
    padding-right: 30px;
    .hamburger {
      display: flex;
    }
    .genres-link {
      display: none;
    }
    .add-playlist-btn {
      display: none;
    }
    label.theme-switcher {
      display: none;
    }
  }
`;
export const NavOptionsContainer = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 25px;
    @media (max-width: 550px) {
      margin-right: 10px;
    }
  }
`;
