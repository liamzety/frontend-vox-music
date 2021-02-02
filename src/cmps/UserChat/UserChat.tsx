import React, { useRef, useEffect } from 'react';
// @ts-ignore
import ScrollToBottom from 'react-scroll-to-bottom';
// Store
import { useStore } from '../../store/StoreContext';
// Types
import { ChatMsgType } from '../../types/ChatMsg';
// Icons
import { BsBoxArrowInLeft, BsBoxArrowInUp } from 'react-icons/bs';
import { AiOutlineSend } from 'react-icons/ai';
// Styles
import {
  UserChatStyles,
  ChatBubble,
  ChatHeader,
  ChatFooterForm,
} from './userChat-styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';

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
  const { userStore } = useStore();
  const _getFormattedTime = (timestamp: number) => {
    let h: number | string = new Date(timestamp).getHours();
    let m: number | string = new Date(timestamp).getMinutes();

    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;

    return h + ':' + m;
  };
  const elChatInput = useRef(null);
  useEffect(() => {
    elChatInput.current.focus();
  }, []);
  return (
    <UserChatStyles>
      <ChatHeader className="flex col space-between">
        <div className="flex">
          <Svg pointer={true} size="25px" color="mainTxt" cb={onToggleChat}>
            {window.innerWidth > 1080 ? (
              <BsBoxArrowInLeft />
            ) : (
              <BsBoxArrowInUp />
            )}
          </Svg>
          <Text type="h3">{playlistName} - Chat Room</Text>
        </div>
        <Text className={`flex ${userTyping ? '' : 'hide'}`} type="p">
          {userTyping} almohalum{' '}
          <span className="typing typing-animation">is typing...</span>
        </Text>
      </ChatHeader>

      <ScrollToBottom
        followButtonClassName="scroll-down-btn"
        className="chat-bubble-container"
      >
        {msgs &&
          msgs.length > 0 &&
          msgs.map((msg: ChatMsgType, idx: number) => (
            <ChatBubble
              className={`${
                msg.byUser.name === userStore.user.name
                  ? 'sent-by-me scale-in-tr'
                  : 'scale-in-tl'
              }`}
              key={idx}
            >
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

      <ChatFooterForm
        onSubmit={(ev) => {
          ev.preventDefault();
          elChatInput.current.value = '';
          handleSendMsg();
        }}
      >
        <input ref={elChatInput} onChange={handleTyping} type="text" />
        <button
          onClick={() => {
            elChatInput.current.focus();
          }}
          style={{ all: 'unset' }}
          type={
            elChatInput.current && elChatInput.current.value
              ? 'submit'
              : 'button'
          }
        >
          <Svg pointer={true} size="25px" color="mainTxt">
            <AiOutlineSend />
          </Svg>
        </button>
      </ChatFooterForm>
    </UserChatStyles>
  );
};
