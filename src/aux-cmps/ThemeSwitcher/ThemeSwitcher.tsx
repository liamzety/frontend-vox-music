import React from 'react';
// Styles
import { ThemeSwitcherStyle } from './themeSwitcher-styles';
interface ThemeSwitcherProps {
  toggleTheme: () => void;
  className?: string;
  theme: string;
}
export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({
  toggleTheme,
  className,
  theme,
}) => {
  return (
    <ThemeSwitcherStyle>
      <input
        onChange={toggleTheme}
        checked={theme === 'dark' ? false : true}
        className={`l ${className}`}
        type="checkbox"
      ></input>
    </ThemeSwitcherStyle>
  );
};
