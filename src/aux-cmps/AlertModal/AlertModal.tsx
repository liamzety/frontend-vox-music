import React from 'react';
// Styles
import { AlertModalStyle } from './AlertModal.styles';
// Icons
import { ImWarning } from 'react-icons/im';
import { BiErrorAlt, BiCheckCircle } from 'react-icons/bi';
// Cmps
import { Svg } from '../Svg/Svg';
import { Text } from '../Text/Text';
import { GlobalVars } from '../../assets/style/basics/vars';

interface AlertModalProps {
  userMsg: {
    type: keyof typeof GlobalVars | any;
    msg: string;
    isOn: boolean;
  };
}

export const AlertModal: React.FC<AlertModalProps> = ({
  userMsg: { type, msg, isOn },
}) => {
  const getIcon = () => {
    switch (type) {
      case 'error':
        return <BiErrorAlt />;
      case 'alert':
        return <ImWarning />;
      case 'success':
        return <BiCheckCircle />;
    }
  };
  return (
    <AlertModalStyle
      className={`${isOn ? 'show-msg' : 'hide-msg'}`}
      type={type}
    >
      <div className="icon-container flex align-center justify-center">
        <Svg color={type} size="2.25rem">
          {getIcon()}
        </Svg>
      </div>
      <div className="msg-container flex align-center justify-center">
        <Text color={type} size="1rem" type="h4">
          {msg}
        </Text>
      </div>
    </AlertModalStyle>
  );
};
