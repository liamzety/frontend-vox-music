import { darken } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
export const ThemeSwitcherStyle = styled.div`
  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    z-index: -1;
  }
  .check-trail {
    display: flex;
    align-items: center;
    width: 3.5rem;
    height: 1.8rem;
    background: ${darken(GlobalVars.pinkMain, 0.8)};
    border: 2px solid ${GlobalVars.pinkMain};
    border-radius: 1.25rem;
    transition: 0.2s;
    cursor: pointer;
    &:hover {
      .check-handler {
        background: ${darken(GlobalVars.pinkMain, 0.4)};
      }
    }
  }
  .check-handler {
    display: flex;
    margin-left: 0.4rem;
    justify-content: center;
    align-items: center;
    width: 1.2rem;
    height: 1.2rem;
    background: ${darken(GlobalVars.pinkMain, 0.1)};
    border-radius: 50%;
    transition: 0.2s;
    &:before {
      content: '';
      color: white;
      font-size: 0.1rem;
      font-weight: bold;
    }
  }
  input[type='checkbox']:checked + .check-trail {
    background: ${darken(GlobalVars.blueMain, 0.8)};
    border: 2px solid ${GlobalVars.blueMain};
    &:hover {
      .check-handler {
        background: ${darken(GlobalVars.blueMain, 0.4)};
      }
    }
    .check-handler {
      margin-left: 50%;
      background: ${darken(GlobalVars.blueMain, 0.1)};
      &::before {
        content: '';
      }
    }
  }
`;
