import styled from 'styled-components';

export const SongListContainer = styled.ul`
    margin-bottom: 25px;
    background: ${({ theme }) => theme.playList};
    padding: 10px 0;
    box-shadow: inset 0 0 11px 0px #0606062e;
  `;
export const SongContainer = styled.li`
    display: flex;
    cursor:pointer;
    align-items: center;
    color: ${({ theme }) => theme.mainSectionTxt};
    padding: 5px;
    &:not(:last-of-type) {
      border-bottom: 2px solid ${({ theme }) => theme.hr};
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
export const SongTitle = styled.h4`
    color: ${({ theme }) => theme.mainSectionTitle};
  `;