import styled from 'styled-components';
import { remConverter, retroTvEffect } from '../../assets/style/main';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
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
  .chat-btn-container {
    height: 40px;
  }
  .user-typing-txt {
    margin-right: 10px;
    max-width: 100px;
    max-height: 100px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const CreatedByContainer = styled.div`
  line-height: 2;
  &[data-tooltip]::after {
    top: 120% !important;
    left: 75px !important;
  }
`;
export const ImgThumbnail = styled.div`
  width: 30%;
  min-width: 250px;
  height: 250px;
  margin-right: 20px;
  background-color: #0d0d0d;
  background-blend-mode: normal;

  --aug-b: 6px;
  --aug-t: 6px;
  --aug-b-extend1: 60px;
  --aug-t-extend1: 60px;
  --aug-border-all: 2px;

  img {
    height: 100%;
    width: 100%;
  }
  @media (max-width: 750px) {
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
  }
`;
export const UserProfileImg = styled.img`
  margin: 10px;
  width: ${remConverter(45)};
  height: ${remConverter(45)};
  border-radius: 50%;
`;
