import React from 'react';
import { TextStyle } from './text-styles';

export interface TextProps {
  type: 'banner-title' | 'banner-sub-title' | 'h1' | 'h2' | 'h3' | 'h4' | 'p';
  size?: string;
  bold?: boolean;
  color?: string;
}

export const Text: React.FC<TextProps> = ({
  type,
  size,
  color,
  bold,
  children,
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
      {children}
    </TextStyle>
  );
};
