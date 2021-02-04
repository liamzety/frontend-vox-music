import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';

export const UserChatStyles = styled.div`
  margin-right: 50px;
  background: #00000087;
  @media (max-width: 1080px) {
    margin-right: 0;
    margin-bottom: 50px;
  }

  .chat-bubble-container {
    display: flex;
    height: calc(100vh - 370px);
    overflow: overlay;
    flex-direction: column;
    position: relative;
    & > div {
      padding: 25px;
    }
    .scroll-down-btn {
      width: 35px;
      height: 25px;
      bottom: 35px;
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
height: 50px;
padding: 5px;
svg {
  margin-right:15px;
}
}
`;
export const ChatFooterForm = styled.form`
display: flex;
height: 50px;
padding: 5px 25px;
align-items: center;
justify-content: space-between;
}
`;

export const ChatBubble = styled.div`
  background: ${({ theme }) => theme.chatBubbleBody};
  color: ${({ theme }) => theme.chatBubbleTxt};
  padding: 5px;
  border-radius: 10px;
  width: fit-content;
  word-break: break-all;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  &.sent-by-me {
    margin-left: auto;
    color: ${GlobalVars.blackMain};
    background: ${GlobalVars.blueMain};
  }
  .chat-time-sent {
    margin-left: 50px;
  }
`;
