import React from 'react';
// Styles
import { GlobalVars } from '../../assets/style/basics/vars';
import { AlertModalStyle } from './AlertModal.styles';
// Icons
import { ImWarning } from 'react-icons/im';
import { BiErrorAlt, BiCheckCircle } from 'react-icons/bi';
// Cmps
import { Svg } from '../Svg/Svg';
import { Text } from '../Text/Text';

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
        <Text
          color={type}
          size="1.1rem"
          type="p"
          bold={true}
          dangerouslySetInnerHTML={{ __html: msg }}
        />
      </div>
    </AlertModalStyle>
  );
};
