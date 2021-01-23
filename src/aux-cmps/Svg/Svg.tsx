import React from 'react';
// Styles
import { SvgStyle } from './svg-styles';

interface SvgProps {
  color?: string;
  size: string;
  children: JSX.Element;
}
export const Svg: React.FC<SvgProps> = ({ color, size, children }) => {
  return (
    <SvgStyle color={color} size={size}>
      {children}
    </SvgStyle>
  );
};
