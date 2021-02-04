import React from 'react';
// Styles
import { ButtonStyle } from './button-styles';

export interface ButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: string;
  bgColor?: string;
  border?: string;
  cb?: (ev: any) => void;
  label: string;
  children: string | JSX.Element | (string | JSX.Element)[];
}

export const Button: React.FC<ButtonProps> = ({
  className,
  size = 'medium',
  color = 'mainBtnTxt',
  border = 'mainBtnBorder',
  bgColor = 'mainBtn',
  cb,
  label,
  children,
  ...props
}) => {
  return (
    <ButtonStyle
      onClick={cb}
      color={color}
      bgColor={bgColor}
      border={border}
      className={`btn-${size} ${className ? className : ''}`}
      {...props}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-glitch"></span>
      <span className="btn-label">{label}</span>
    </ButtonStyle>
  );
};
