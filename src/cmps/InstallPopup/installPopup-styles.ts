import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

export const InstallPopupContainer = styled.div`
  position: fixed;
  line-height: 1.5;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${GlobalVars.yellowMain};
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.137);
  border: 2px solid ${GlobalVars.blackMain};
  padding: 10px 20vw;
  color: ${GlobalVars.blackMain};
  z-index: 999;
  & * {
    margin: 0;
  }
  @media (max-width: 1080px) {
    top: auto;
    bottom: 0;
    padding: 10px 10vw;
  }

  button {
    margin-bottom: 25px;
  }
`;
export const InstallPopupInnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: -25px;
  @media (max-width: 750px) {
    justify-content: center;
    flex-direction: column;
    p {
      margin: auto;
    }
  }
`;
export const InstallPopupWordContainer = styled.div`
  margin-bottom: 25px;
`;

export const InstallPopupCloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5em;
`;
