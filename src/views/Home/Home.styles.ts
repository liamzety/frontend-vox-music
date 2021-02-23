import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { localImgService } from '../../services/localImgService';

export const PlaylistListWrapper = styled.section`
  background: url(${localImgService.glitchLight2}) 0 100% no-repeat;
  background-position: top left;
  padding-top: 100px;
`;
export const Footer = styled.section`
  background: ${GlobalVars.blackMain};
  color: ${GlobalVars.yellowMain};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`;
export const AuthorCard = styled.div`
  background: ${GlobalVars.yellowMain};
  color: ${GlobalVars.blackMain};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-bottom: 15px;

  span {
    margin-left: 15px;
  }
`;
