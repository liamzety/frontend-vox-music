import React, { useState } from 'react';
// Styles
import {
  UserChatStyles,
  ChatBubble,
  ChatHeader,
  ChatFooter,
} from './userChat-styles';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';
interface UserChatProps {
  onToggleChat: () => void;
}

export const UserChat: React.FC<UserChatProps> = ({ onToggleChat }) => {
  const [msgs, setMsgs] = useState([]);
  const [msg, setMsg] = useState('');
  const handleTyping = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setMsg(ev.target.value);
  };
  const handleSendMsg = () => {
    setMsgs([...msgs, msg]);
  };
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
        {msgs.length > 0 &&
          msgs.map((msg, idx) => <ChatBubble key={idx}>{msg}</ChatBubble>)}
      </ScrollToBottom>

      <ChatFooter>
        <input onChange={handleTyping} type="text" />
        <button onClick={handleSendMsg}>SEND</button>
      </ChatFooter>
    </UserChatStyles>
  );
};
