import React from 'react';
// Styles
import { GlobalVars } from '../../assets/style/basics/vars';
import { TextStyle } from './Text.styles';

export interface TextProps
  extends React.BaseHTMLAttributes<HTMLParagraphElement> {
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
  color?: keyof typeof GlobalVars;
  uppercase?: boolean;
  capitalize?: boolean;
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
  capitalize,
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
      capitalize={capitalize}
      underline={underline}
      active={active}
      {...props}
    >
      {children}
    </TextStyle>
  );
};
