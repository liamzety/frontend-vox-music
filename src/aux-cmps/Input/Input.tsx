import React, { MutableRefObject } from 'react';
// Styles
import { InputStyle, InputContainer } from './input-styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onChange: (ev?: any) => void;
  name: string;
  type: string;
  uppercase?: boolean;
  domRef?: MutableRefObject<any>;
  secondary?: boolean;
}
export const Input: React.FC<InputProps> = ({
  onChange,
  name,
  uppercase = true,
  domRef,
  secondary,
  ...baseProps
}) => {
  return (
    <InputStyle
      {...baseProps}
      secondary={secondary}
      ref={domRef}
      data-augmented-ui="tr-clip bl-clip border"
      onChange={onChange}
      name={name}
      uppercase={uppercase}
    />
  );
};
