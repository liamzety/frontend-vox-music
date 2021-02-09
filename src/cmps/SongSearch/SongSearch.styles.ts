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
`;
