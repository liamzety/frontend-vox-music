import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { retroTvEffect } from '../../assets/style/main';
import { localImgService } from '../../services/localImgService';

export const SongListWrapper = styled.div`
  --aug-border-all: 2px;
`;
export const SongListContainer = styled.ul`
  height: calc(100vh - 600px);
  min-height: 250px;
  background: url(${localImgService.world});
  background-color: ${({ theme }) => fade(theme.mainBg, 0.7)};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: overlay;
  padding: 15px;

  @media (max-width: 750px) {
    min-height: 200px;
    height: calc(100vh - 750px);
  }
`;
export const SongContainer = styled.li`
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 5px 10px;
  border-radius:35px;
  transition: 0.1s linear;

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
  svg {
  transition: 0.1s linear;
    margin-left:10px;
    &:hover {
      transform:rotate(20deg);
    }
  }
  &:hover {
    ${retroTvEffect}
    background: ${fade(GlobalVars.pinkMain, 0.1)};
  }
`;
export const SongThumbnail = styled.img`
  border-radius: 50%;
  width: 50px;
  margin-right: 15px;
`;
