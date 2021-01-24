import React from 'react';
// Styles
import { ThemeSwitcherStyle } from './themeSwitcher-styles';
interface ThemeSwitcherProps {
  toggleTheme: () => void;
  theme: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  toggleTheme,
  theme,
}) => {
  return (
    <ThemeSwitcherStyle>
      <input
        onChange={toggleTheme}
        checked={theme === 'dark' ? false : true}
        className="l"
        type="checkbox"
      ></input>
    </ThemeSwitcherStyle>
  );
};
