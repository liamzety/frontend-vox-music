import styled from 'styled-components';

export const UserChatStyles = styled.div`
  margin-right: 50px;
  background: #00000087;
  @media (max-width: 750px) {
    margin-right: 0;
    margin-bottom: 50px;
  }

  .chat-bubble-container {
    display: flex;
    padding: 25px;
    height: calc(100vh - 370px);
    overflow: overlay;
    flex-direction: column;
    position: relative;

    .scroll-down-btn {
      width: 35px;
      height: 25px;
      bottom: 25px;
      right: 60px;
      &:before {
        content: '👇🏻';
        font-size: 17px;
      }
    }

    @media (max-width: 750px) {
      height: 50vh;
    }
  }
`;
export const ChatHeader = styled.div`
display: flex;
height: 50px;
padding: 5px 25px;
align-items: center;
justify-content: space-between;
}
`;
export const ChatFooter = styled.div`
display: flex;
height: 50px;
padding: 5px 25px;
align-items: center;
justify-content: space-between;
}
`;

export const ChatBubble = styled.div`
  background: black;
  color: white;
  padding: 5px;
  border-radius: 10px;
  width: fit-content;
  word-break: break-all;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
`;
