import React from 'react';
// Styles
import { SvgStyle } from './svg-styles';

interface SvgProps {
  size: string;
  children: JSX.Element;
  pointer?: boolean;
  color?: string;
  className?: string;
  onClick?: (ev?: any) => void;
}
export const Svg: React.FC<SvgProps> = ({
  size,
  children,
  pointer,
  className,
  color,
  onClick,
}) => {
  return (
    <SvgStyle
      onClick={onClick}
      className={className}
      pointer={pointer}
      color={color}
      size={size}
    >
      {children}
    </SvgStyle>
  );
};
