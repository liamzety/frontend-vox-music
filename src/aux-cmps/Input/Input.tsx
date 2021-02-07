import React, { MutableRefObject } from 'react';
// Styles
import { InputStyle, InputContainer } from './input-styles';

export interface InputProps {
  onChange: (ev?: any) => void;
  name: string;
  type: string;
  placeholder?: string;
  uppercase?: boolean;
  domRef?: MutableRefObject<any>;
}
export const Input: React.FC<InputProps> = ({
  onChange,
  name,
  type,
  placeholder,
  uppercase = true,
  domRef,
}) => {
  return (
    <InputStyle
      ref={domRef}
      data-augmented-ui="tr-clip bl-clip border"
      onChange={onChange}
      name={name}
      type={type}
      uppercase={uppercase}
      placeholder={placeholder}
    />
  );
};
