import styled from 'styled-components';

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

  svg {
    margin-left: -35px;
    z-index: 1;
  }
`;

export const ListeningDisplay = styled.div`
  background: red;
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

  display: flex;
  align-items: center;
  justify-content: center;
`;
