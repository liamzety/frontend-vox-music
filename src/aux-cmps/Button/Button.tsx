import React from 'react';
import { ButtonStyle } from './button-styles';

export interface ButtonProps {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label: string;
  content: any;
  color?: string;
  bgColor?: string;
  cb: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  primary = true,
  size = 'medium',
  label,
  content,
  color = 'black',
  bgColor = 'yellow',
  cb,
  ...props
}) => {
  console.log('content', content);
  return (
    <ButtonStyle
      onClick={cb}
      color={color}
      bgColor={bgColor}
      className={`${primary ? '' : 'btn-secondary'} btn-${size}`}
      {...props}
    >
      <span className="btn-content">{content}</span>
      <span className="btn-glitch"></span>
      <span className="btn-label">{label}</span>
    </ButtonStyle>
  );
};
