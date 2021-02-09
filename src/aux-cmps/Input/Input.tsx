import React, { MutableRefObject } from 'react';
// Styles
import { InputStyle } from './Input.styles';

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
  uppercase = false,
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
