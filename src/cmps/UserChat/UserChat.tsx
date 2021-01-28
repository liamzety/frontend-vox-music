import React from 'react';
import { UserChatStyles, ChatBubble } from './userChat-styles';

interface UserChatProps {
  onToggleChat: () => void;
}

export const UserChat: React.FC<UserChatProps> = ({ onToggleChat }) => {
  return (
    <UserChatStyles>
      <div className="flex space-between">
        <h3>CHAT HERE!</h3>

        <button onClick={onToggleChat}>CLOSE</button>
      </div>
      <div className="chat-bubble-container">
        <ChatBubble>Lorem ipsum dolor sit amet consectetur.</ChatBubble>
        <ChatBubble>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          facilis eum iure nostrum fugit nulla accusamus harum alias omnis
          saepe?
        </ChatBubble>
        <ChatBubble>Lorem, ipsum.</ChatBubble>
        <ChatBubble>Lorem ipsum dolor sit amet.</ChatBubble>
        <ChatBubble>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          provident.
        </ChatBubble>
        <ChatBubble>Lorem ipsum dolor sit amet consectetur.</ChatBubble>
        <ChatBubble>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          facilis eum iure nostrum fugit nulla accusamus harum alias omnis
          saepe?
        </ChatBubble>
        <ChatBubble>Lorem, ipsum.</ChatBubble>
        <ChatBubble>Lorem ipsum dolor sit amet.</ChatBubble>
        <ChatBubble>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          provident.
        </ChatBubble>
        <ChatBubble>Lorem ipsum dolor sit amet consectetur.</ChatBubble>
        <ChatBubble>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia
          facilis eum iure nostrum fugit nulla accusamus harum alias omnis
          saepe?
        </ChatBubble>
        <ChatBubble>Lorem, ipsum.</ChatBubble>
        <ChatBubble>Lorem ipsum dolor sit amet.</ChatBubble>
        <ChatBubble>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate,
          provident.
        </ChatBubble>
      </div>
    </UserChatStyles>
  );
};
