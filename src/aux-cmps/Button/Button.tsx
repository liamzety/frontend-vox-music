import React from 'react';
// Styles
import { ButtonStyle } from './button-styles';

export interface ButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  label: string;
  children: string | JSX.Element | (string | JSX.Element)[];
  color?: string;
  bgColor?: string;
  cb?: (ev: any) => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  size = 'medium',
  label,
  children,
  color = 'mainBtnTxt',
  bgColor = 'mainBtn',
  cb,
  ...props
}) => {
  return (
    <ButtonStyle
      onClick={cb}
      color={color}
      bgColor={bgColor}
      className={`btn-${size} ${className}`}
      {...props}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-glitch"></span>
      <span className="btn-label">{label}</span>
    </ButtonStyle>
  );
};
