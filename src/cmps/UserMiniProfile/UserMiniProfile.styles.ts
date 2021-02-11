import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';
import { localImgService } from '../../services/localImgService';

export const UserMiniProfileStyles = styled.div`
  &,
  > img {
    height: ${remConverter(50)};
    width: ${remConverter(50)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: transperant;
    border: 2px solid ${({ theme }) => theme.navbarTxt};
  }
`;
export const UnknownUser = styled.div`
  background-image: url(${localImgService.unknownUser});
  width: ${remConverter(50)};
  height: ${remConverter(50)};
  background-position: center;
  background-size: contain;
`;
