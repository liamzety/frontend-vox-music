import React from 'react';
import { TextStyle } from '../aux-cmps/Text/text-styles';

export interface TextProps {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: string;
  color?: string;
  bold?: boolean;
  content: string;
}

export const Text: React.FC<TextProps> = ({
  type,
  size,
  color,
  content,
  bold,
  ...props
}) => {
  return (
    <TextStyle
      className={type}
      color={color}
      size={size}
      bold={bold}
      {...props}
    >
      {content}
    </TextStyle>
  );
};
