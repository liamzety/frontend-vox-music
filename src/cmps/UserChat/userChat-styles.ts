import styled from 'styled-components';

interface Props {}
export const UserChatStyles = styled.div<Props>`
  display: flex;
  background: #00000087;
  padding: 25px;
  height: calc(100vh - 200px);
  overflow: overlay;
  flex-direction: column;
  margin-right: 50px;

  @media (max-width: 750px) {
    margin-right: 0;
    margin-bottom: 50px;
    height: 50vh;
  }
`;
export const ChatBubble = styled.div`
  background: black;
  color: white;
  padding: 5px;
  border-radius: 10px;
  width: fit-content;

  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
