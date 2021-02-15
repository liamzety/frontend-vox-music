import React from 'react';
// Styles
import { SvgStyle } from './Svg.styles';

interface SvgProps extends React.SVGAttributes<HTMLElement> {
  children: JSX.Element;
  size?: string;
  pointer?: boolean;
  color?: string;
  className?: string;
  onClick?: (ev?: any) => void;
}
export const Svg: React.FC<SvgProps> = ({
  size = '40px',
  children,
  pointer,
  className,
  color,
  onClick,
  ...defaultProps
}) => {
  return (
    <SvgStyle
      onClick={onClick}
      className={className}
      pointer={pointer}
      color={color}
      size={size}
      {...defaultProps}
    >
      {children}
    </SvgStyle>
  );
};
