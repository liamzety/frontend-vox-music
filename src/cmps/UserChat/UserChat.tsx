import React from 'react';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';
// Types
import { ChatMsgType } from '../../types/ChatMsg';
// Styles
import {
  UserChatStyles,
  ChatBubble,
  ChatHeader,
  ChatFooter,
} from './userChat-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';

interface UserChatProps {
  onToggleChat: () => void;
  handleTyping: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleSendMsg: () => void;
  msgs: ChatMsgType[];
  playlistName: string;
  userTyping: string;
}

export const UserChat: React.FC<UserChatProps> = ({
  onToggleChat,
  handleTyping,
  handleSendMsg,
  msgs,
  playlistName,
  userTyping,
}) => {
  const _getFormattedTime = (timestamp: number) => {
    let h: number | string = new Date(timestamp).getHours();
    let m: number | string = new Date(timestamp).getMinutes();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;

    return h + ':' + m;
  };
  return (
    <UserChatStyles>
      <ChatHeader className="flex col space-between">
        <div className="flex space-between">
          <Text type="h3">{playlistName} - Chat Room</Text>
          <button onClick={onToggleChat}>CLOSE</button>
        </div>
        <Text className={userTyping ? '' : 'hide'} type="p">
          {userTyping} is typing
        </Text>
      </ChatHeader>

      <ScrollToBottom
        followButtonClassName="scroll-down-btn"
        className="chat-bubble-container"
      >
        {msgs &&
          msgs.length > 0 &&
          msgs.map((msg: ChatMsgType, idx: number) => (
            <ChatBubble key={idx}>
              <Text type="p" bold={true}>
                {msg.byUser.name}
              </Text>
              <br />
              <div className="flex space-between">
                <Text type="p">{msg.msgTxt}</Text>
                <Text className="chat-time-sent" type="p">
                  {_getFormattedTime(msg.timeSent)}
                </Text>
              </div>
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
