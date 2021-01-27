import React from 'react';
// Styles
import { TextStyle } from './text-styles';

export interface TextProps {
  type:
    | 'banner-title'
    | 'banner-sub-title'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'p'
    | 'a'
    | 'logo';
  className?: string;
  size?: string;
  bold?: boolean;
  color?: string;
  uppercase?: boolean;
  underline?: boolean;
  active?: boolean;
}

export const Text: React.FC<TextProps> = ({
  type,
  className,
  size,
  color,
  bold,
  uppercase,
  underline,
  active,
  children,
  ...props
}) => {
  return (
    <TextStyle
      className={`${type} ${className ? className : ''}`}
      color={color}
      size={size}
      bold={bold}
      uppercase={uppercase}
      underline={underline}
      active={active}
      {...props}
    >
      {children}
    </TextStyle>
  );
};
