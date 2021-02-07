import React from 'react';
// Styles
import { InputStyle, InputContainer } from './input-styles';

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
    <InputContainer>
      <InputStyle
        data-augmented-ui="tr-clip bl-clip border"
        onChange={onChange}
        name={name}
        type={type}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};
