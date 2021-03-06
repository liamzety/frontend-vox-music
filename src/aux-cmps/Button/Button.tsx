import React, { useEffect, useRef } from 'react';
// Styles
import { GlobalVars } from '../../assets/style/basics/vars';
import { ButtonStyle } from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  color?: keyof typeof GlobalVars;
  bgColor?: keyof typeof GlobalVars;
  border?: keyof typeof GlobalVars;
  children: string | JSX.Element | (string | JSX.Element)[];
}

export const Button: React.FC<ButtonProps> = ({
  className,
  size = 'medium',
  color,
  border,
  bgColor,
  children,
  ...baseProps
}) => {
  const _generateLabel = () => {
    let res = '';
    const characters = 'CEFKMRTX';
    const numbers = '0123456789';
    res += characters.charAt(Math.floor(Math.random() * characters.length));
    res += numbers.charAt(Math.floor(Math.random() * numbers.length));
    res += numbers.charAt(Math.floor(Math.random() * numbers.length));
    return res;
  };
  let label = useRef(null);
  useEffect(() => {
    label.current = _generateLabel();
  }, []);
  return (
    <ButtonStyle
      {...baseProps}
      color={color}
      bgColor={bgColor}
      border={border}
      className={`btn-${size} ${className ? className : ''}`}
    >
      <span className="btn-content">{children}</span>
      <span className="btn-glitch"></span>
      <span className="btn-label">{label.current || _generateLabel()}</span>
    </ButtonStyle>
  );
};
