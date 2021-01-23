import React from 'react';
// Styles
import { ThemeSwitcherStyle } from './themeSwitcher-styles';
interface ThemeSwitcherProps {
  toggleTheme: () => void;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  toggleTheme,
}) => {
  return (
    <ThemeSwitcherStyle>
      <input onChange={toggleTheme} className="l" type="checkbox"></input>
    </ThemeSwitcherStyle>
  );
};
