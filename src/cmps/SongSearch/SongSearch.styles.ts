import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

export const SongSearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  position: relative;
  input {
    margin-left: 20px;
    @media (max-width: 750px) {
      margin-left: 0;
    }
  }

  span.mic {
    margin-left: -35px;
    z-index: 1;
  }
`;

export const ListeningOverlay = styled.div`
  background: ${GlobalVars.whiteSecondary};

  width: 250px;
  height: 250px;
  position: fixed;
  z-index: 5;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  border-radius: 50%;
  box-shadow: 6px 7px 6px 0px #00000040;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 70px 15px;

  &:before {
    content: '';
    width: 255px;
    top: -5px;
    height: 255px;
    border-radius: 50%;
    position: absolute;
    border: 2px solid ${GlobalVars.whiteMain};
  }
`;
