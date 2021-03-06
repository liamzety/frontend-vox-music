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
  UserChatBgWrapper,
} from './UserChat.styles';
import { UserProfileImg } from '../../assets/style/main';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { Input } from '../../aux-cmps/Input/Input';

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
    <UserChatStyles data-augmented-ui="tl-clip  tr-clip br-clip  bl-clip border">
      <ChatHeader className="flex col space-between">
        <div className="flex">
          <Svg pointer={true} size="25px" onClick={onToggleChat}>
            {window.innerWidth > 1080 ? (
              <BsBoxArrowInLeft />
            ) : (
              <BsBoxArrowInUp />
            )}
          </Svg>
          <Text type="h3">{playlistName} - Chat Room</Text>
        </div>
        <Text className={`flex ${userTyping ? '' : 'hide'}`} type="p">
          {userTyping} <span className="typing pulsate-back">is typing...</span>
        </Text>
      </ChatHeader>

      <ScrollToBottom
        followButtonClassName="scroll-down-btn"
        className="chat-bubble-container"
      >
        <UserChatBgWrapper />
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
              <div>
                {msg.byUser.profile_img && (
                  <UserProfileImg src={msg.byUser.profile_img} alt="profile" />
                )}
                <Text type="p" bold={true} color="blackMain">
                  {msg.byUser.name}
                </Text>
              </div>
              <br />
              <div className="content-container flex space-between wrap">
                <Text type="p" color="blackMain">
                  {msg.msgTxt}
                </Text>
                <Text color="blackSecondary" type="p">
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
        <Input
          uppercase={false}
          domRef={elChatInput}
          name="user-chat-input"
          onChange={handleTyping}
          type="text"
          autoComplete="off"
        />
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
          <Svg pointer={true} size="25px">
            <AiOutlineSend />
          </Svg>
        </button>
      </ChatFooterForm>
    </UserChatStyles>
  );
};
