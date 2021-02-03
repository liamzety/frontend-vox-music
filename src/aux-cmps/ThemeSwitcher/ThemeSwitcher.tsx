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
        id="chck"
        type="checkbox"
      />
      <label htmlFor="chck" className="theme-switcher check-trail">
        <span className="check-handler"></span>
      </label>
    </ThemeSwitcherStyle>
  );
};
