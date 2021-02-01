import React from 'react';
// Styles
import {
  UserChatStyles,
  ChatBubble,
  ChatHeader,
  ChatFooter,
} from './userChat-styles';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';
import { ChatMsgType } from '../../types/ChatMsg';
interface UserChatProps {
  onToggleChat: () => void;
  handleTyping: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMsg: () => void;
  msgs: any;
}

export const UserChat: React.FC<UserChatProps> = ({
  onToggleChat,
  handleTyping,
  handleSendMsg,
  msgs,
}) => {
  return (
    <UserChatStyles>
      <ChatHeader className="flex space-between">
        <h3>CHAT HERE!</h3>
        <div>
          <button onClick={onToggleChat}>CLOSE</button>
        </div>
      </ChatHeader>

      <ScrollToBottom
        followButtonClassName="scroll-down-btn"
        className="chat-bubble-container"
      >
        {msgs &&
          msgs.length > 0 &&
          msgs.map((msg: ChatMsgType, idx: number) => (
            <ChatBubble key={idx}>
              {msg.byUser.name} <br />
              {msg.msgTxt}
            </ChatBubble>
          ))}
      </ScrollToBottom>

      <ChatFooter>
        <input onChange={handleTyping} type="text" />
        <button onClick={handleSendMsg}>SEND</button>
      </ChatFooter>
    </UserChatStyles>
  );
};
