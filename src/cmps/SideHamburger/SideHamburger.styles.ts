import { fade } from '@material-ui/core';
import styled from 'styled-components';

export const SideHamburgerStyles = styled.div`
  position: fixed;
  height: 100%;
  right: 0;
  z-index: 10;
  background: ${({ theme }) => theme.mainBg};
  border-left: 4px solid ${({ theme }) => fade(theme.mainBorder, 0.8)}}
  width: 50vw;
  padding-top: 150px;
  
  .inner-container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    height: 50%;
  }

  .theme-switcher-mobile {
    width: 5.5rem;
    height: 2.55rem;
    &::before {
      width:2.2rem;
      height:2.2rem;
    }
    &::after {
      width:2rem;
      height:1.8rem;
    }
  }
`;
