import { fade } from '@material-ui/core';
import styled from 'styled-components';
import { GlobalVars } from '../../assets/style/basics/vars';
import { localImgService } from '../../services/localImgService';

export const UserChatStyles = styled.div`
  margin-right: 50px;
  background: ${({ theme }) => theme.mainBg};
  --aug-border-all: 2px;

  @media (max-width: 1080px) {
    margin-right: 0;
    margin-bottom: 50px;
  }

  .chat-bubble-container {
    display: flex;
    height: calc(100vh - 410px);
    overflow: overlay;
    flex-direction: column;
    position: relative;
    background: url(${localImgService.astronaut});
    background-color: ${({ theme }) => theme.mainBg};
    background-position: center;
    background-size: cover;

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
export const UserChatBgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: ${({ theme }) => fade(theme.mainBg, 0.85)};
`;
export const ChatHeader = styled.div`
  height: 70px;
  padding: 10px 25px;
  svg {
    margin-right: 15px;
  }
`;
export const ChatFooterForm = styled.form`
  display: flex;
  height: 70px;
  padding: 5px 25px;
  align-items: center;
  justify-content: space-between;
  input {
    margin-right: 20px;
  }
`;

export const ChatBubble = styled.div`
  background: ${({ theme }) => theme.chatBubbleBody};
  color: ${({ theme }) => theme.chatBubbleTxt};
  padding: 5px;
  border-radius: 5px;
  width: fit-content;
  max-width: 45%;
  word-break: break-all;
  box-shadow: 3px 3px 10px #00000038;
  &:not(:last-child) {
    margin-bottom: 25px;
  }
  img {
    position: absolute;
    right: -60px;
    top: -10px;
  }

  &.sent-by-me {
    margin-left: auto;
    color: ${GlobalVars.blackMain};
    background: ${GlobalVars.blueMain};
    box-shadow: -3px 3px 10px #00000038;
    img {
      left: -60px;
    }
  }

  .content-container {
    margin-top: -10px;
    p {
      margin-top: 10px;
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
