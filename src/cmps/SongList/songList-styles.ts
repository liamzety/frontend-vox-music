import styled from 'styled-components';

export const SongListContainer = styled.ul`
  min-height: calc(50vh - 150px);
  margin-bottom: 25px;
  margin: 10px 0;
  background: #000000c7;
`;
export const SongContainer = styled.li`
  background: ${({ theme }) => theme.secBg};
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
