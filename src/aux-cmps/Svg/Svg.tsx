import React from 'react';
import { SvgStyle } from './svg-styles';

interface SvgProps {
  color: string;
  size: string;
  icon: any;
}
export const Svg: React.FC<SvgProps> = ({ color, size, icon }) => {
  return (
    <SvgStyle color={color} size={size}>
      {icon}
    </SvgStyle>
  );
};
