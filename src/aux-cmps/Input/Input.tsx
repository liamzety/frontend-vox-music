import React from 'react';
// Styles
import { InputStyle } from './input-styles';

export interface InputProps {
  onChange: (ev?: any) => void;
  name: string;
  type: string;
  placeholder: string;
}
export const Input: React.FC<InputProps> = ({
  onChange,
  name,
  type,
  placeholder,
}) => {
  return (
    <InputStyle
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
