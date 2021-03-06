import React from 'react';
import { Slide } from '@material-ui/core';
import { Link } from 'react-router-dom';
// Styles
import { SideHamburgerStyles } from './SideHamburger.styles';
// Cmps
import { Text } from '../../aux-cmps/Text/Text';
import { Button } from '../../aux-cmps/Button/Button';
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { ScreenWrapper } from '../../aux-cmps/ScreenWrapper/ScreenWrapper';

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
    <>
      <Slide in={isSideMenuOpen} direction="left" mountOnEnter unmountOnExit>
        <SideHamburgerStyles>
          <div className="inner-container">
            <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} />
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
              onClick={() => {
                openPlaylistAddModal();
                toggleSideMenu();
              }}
            >
              New Playlist_
            </Button>
          </div>
        </SideHamburgerStyles>
      </Slide>

      <ScreenWrapper
        fade={isSideMenuOpen}
        index="9"
        darkenBg={true}
        onClick={toggleSideMenu}
      />
    </>
  );
};
