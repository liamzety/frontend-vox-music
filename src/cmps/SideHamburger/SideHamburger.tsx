import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { Text } from '../../aux-cmps/Text/Text';

// Styles
import { SideHamburgerStyles } from './sideHamburger-styles';
import { Button } from '../../aux-cmps/Button/Button';
import { Slide } from '@material-ui/core';
// Cmps

interface SideHamburgerProps {
  toggleTheme: () => void;
  openPlaylistAddModal: () => void;
  toggleSideMenu: () => void;
  isSideMenuOpen: boolean;
  theme: string;
}
export const SideHamburger: React.FC<SideHamburgerProps> = ({
  toggleTheme,
  openPlaylistAddModal,
  toggleSideMenu,
  isSideMenuOpen,
  theme,
}) => {
  return (
    <Slide in={isSideMenuOpen} direction="left">
      <SideHamburgerStyles>
        <div className="inner-container">
          <ThemeSwitcher
            className="theme-switcher-mobile"
            theme={theme}
            toggleTheme={toggleTheme}
          />
          <div className="relative">
            <Link
              onClick={() => {
                toggleSideMenu();
              }}
              to="/genre/All"
            >
              <Text type="a">Genres</Text>
            </Link>
          </div>
          <Button
            size="small"
            label="r35"
            cb={() => {
              openPlaylistAddModal();
              toggleSideMenu();
            }}
          >
            New Playlist_
          </Button>
        </div>
      </SideHamburgerStyles>
    </Slide>
  );
};
