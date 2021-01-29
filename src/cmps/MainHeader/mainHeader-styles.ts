import styled from 'styled-components';
import { remConverter } from '../../assets/style/main';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 50vh;

  .outer-container {
    @media (max-width: 750px) {
      flex-direction: column;
    }
  }
  .playlist-header-container {
    min-height: 50px;
    margin-bottom: calc(1vh + 2vw);
    & > p:first-child {
      margin-right: 25px;
    }
  }
  .playlist-actions-container {
    min-height: 50px;
  }
  .name-desc-container {
    margin-bottom: 25px;
  }
`;
export const ImgThumbnail = styled.div`
  width: 30%;
  min-width: 250px;
  height: 250px;
  margin-right: 20px;
  --aug-b: 6px;
  --aug-t: 6px;
  --aug-b-extend1: 60px;
  --aug-t-extend1: 60px;

  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;
