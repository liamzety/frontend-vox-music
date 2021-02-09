import React from 'react';
// Styles
import { LogoStyles } from './Logo.styles';

interface LogoProps {}
export const Logo: React.FC<LogoProps> = () => {
  return <LogoStyles></LogoStyles>;
};
