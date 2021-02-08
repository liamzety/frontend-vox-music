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
}
export const Input: React.FC<InputProps> = ({
  onChange,
  name,
  uppercase = true,
  domRef,
  ...baseProps
}) => {
  return (
    <InputStyle
      {...baseProps}
      ref={domRef}
      data-augmented-ui="tr-clip bl-clip border"
      onChange={onChange}
      name={name}
      uppercase={uppercase}
    />
  );
};
