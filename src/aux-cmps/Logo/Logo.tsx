import React from 'react';
import { LogoStyles } from './logo-styles';

interface LogoProps {
  isTopPage?: boolean;
}
export const Logo: React.FC<LogoProps> = ({ isTopPage }) => {
  return <LogoStyles isTopPage={isTopPage}></LogoStyles>;
};
