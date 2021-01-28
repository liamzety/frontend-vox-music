import styled from 'styled-components';

export const MainPage = styled.div`
  display: flex;
  align-items: center;
  min-height: 100vh;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const MainChatContainer = styled.div``;
export const MainHeaderContainer = styled.div`
  flex: 1;
  height: calc(100vh - 200px);
`;
