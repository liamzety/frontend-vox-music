import React from 'react';
import { LogoStyles } from './Logo.styles';

interface LogoProps {}
export const Logo: React.FC<LogoProps> = () => {
  return <LogoStyles></LogoStyles>;
};
