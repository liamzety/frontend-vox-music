import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';
export const LoginContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 2;

  &::before {
    position:absolute;
    content: '';
    bottom: 0;
    left: 0;
    pointer-events: none;
    width: 100%;
    height: 831px;
    background: url(https://static-dm.akamaized.net/legion/prod/le_content-calendar-bg-left-animation_ncsa.png) 0 100% no-repeat,url(https://static-dm.akamaized.net/legion/prod/le_content-calendar-bg-right-animation_ncsa.png) 100% 0 no-repeat;
    background-size:600px;
  }
  form {
    margin-top: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    
    height: 80%;
    width: 80%;
    max-width: 800px;
    @media(max-width:550px) {
      width: 95%;
    }

    p.h2 {
      align-self: flex-start;
    }
    p.a {
      margin-left: auto;
    }

    input {
      width: 100%;
      max-width: inherit;
    }
  }
  .form-inner {
    --aug-border-all: 2px;
    --aug-tl: 0px;
    --aug-tr: ${remConverter(39)} ;
    --aug-br:  ${remConverter(20)};
    --aug-bl:  ${remConverter(20)};
    --aug-border: initial;
    --aug-border-bottom: 6px;
    --aug-border-right: 6px;
    background: ${({ theme }) => fade(theme.mainBg, 0.5)};
    backdrop-filter: blur(4px);
    padding: 20px;
  }
  .shadow-form {
    position: absolute;
    height: 80%;
    width: 80%;
    margin-left: 20px;
    margin-bottom: -20px;
    filter:blur(6px);
    z-index:-1;
    @media(max-width:550px) {
      width: 95%;
    }
    .form-inner {
      backdrop-filter:none;
    }
  }
`;

export const ActionsContainer = styled.div`
  > * {
    margin-bottom: 10px;
  }
`;
