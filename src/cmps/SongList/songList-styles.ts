import styled from 'styled-components';
import { localImgService } from '../../services/localImgService';
export const SongListContainer = styled.ul`
  height: calc(100vh - 600px);
  min-height: 250px;
  background: url(${localImgService.world});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  overflow: overlay;
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
  padding: 5px;
  transition: 0.1s linear;

  &:not(:last-of-type) {
    margin-bottom: 2px;
  }
  &:hover {
    background: ${({ theme }) => theme.songHover};
  }
`;
export const SongThumbnail = styled.img`
  border-radius: 50%;
  width: 50px;
  margin-right: 15px;
`;
export const SongTitle = styled.h4``;
