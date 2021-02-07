import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { retroTvEffect } from '../../assets/style/main';
import { localImgService } from '../../services/localImgService';
export const SongListContainer = styled.ul`
  height: calc(100vh - 600px);
  min-height: 250px;
  background: url(${localImgService.world});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: overlay;
  padding: 15px;

  --aug-border-all: 2px;

  @media (max-width: 750px) {
    min-height: 200px;
    height: calc(100vh - 750px);
  }
`;
export const SongContainer = styled.li`
  // background: ${({ theme }) => theme.secBg};
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

    &:hover {
      transform:rotate(20deg);
    }
  }
  &:hover {
    ${retroTvEffect}
     background: ${fade(GlobalVars.blueMain, 0.2)};
  }
`;
export const SongThumbnail = styled.img`
  border-radius: 50%;
  width: 50px;
  margin-right: 15px;
`;
