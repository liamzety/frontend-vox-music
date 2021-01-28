import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Icons
import { HiOutlineMenu } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
// Styles
import {
  NavbarContainer,
  NavbarContainerInner,
  NavOptionsContainer,
} from './navbar-styles';
// Cmps
import { Logo } from '../../aux-cmps/Logo/Logo';
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { userService } from '../../services/userService';
import { UserMiniProfile } from '../../aux-cmps/UserMiniProfile/UserMiniProfile';
import { ScreenWrapper } from '../../aux-cmps/ScreenWrapper/ScreenWrapper';
import { UserOptionsMenu } from '../UserOptionsMenu/UserOptionsMenu';
import { SideHamburger } from '../SideHamburger/SideHamburger';
import { Svg } from '../../aux-cmps/Svg/Svg';

export const Navbar: React.FC = observer(() => {
  const store = useStore();

  const [isProfileMenu, setIsProfileModal] = useState(false);

  const toggleTheme = (): void => {
    if (store.theme === 'light') {
      store.setTheme('dark');
    } else {
      store.setTheme('light');
    }
  };
  const toggleProfileOptionsModal = () => {
    setIsProfileModal((prevState) => !prevState);
  };
  const handleLogout = () => {
    toggleProfileOptionsModal();
    try {
      userService.logout();
      store.resetUser();
      store.alert({ type: 'success', msg: 'Logged out successfully.' });
      store.clearAlert();
    } catch (err) {
      store.alert(err);
      store.clearAlert();
      console.error(err.msg);
    }
  };
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const openPlaylistAddModal = () => {
    store.toggleModal('addPlaylist');
  };
  const getHamburgerIcon = () => {
    return isSideMenuOpen ? <AiOutlineClose /> : <HiOutlineMenu />;
  };
  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  return (
    <>
      <NavbarContainer data-augmented-ui="br-clip-x b-clip-x bl-clip-x">
        <NavbarContainerInner className="container-x">
          <Link to="/">
            <Logo />
          </Link>
          <NavOptionsContainer>
            <Link to="/genre/All">
              <Text className="genres-link" type="a">
                Genres
              </Text>
            </Link>
            <Button
              className="add-playlist-btn"
              size="small"
              label="r35"
              cb={openPlaylistAddModal}
            >
              New Playlist_
            </Button>
            <div className="relative">
              <UserMiniProfile
                onClick={store.user.isSignedIn && toggleProfileOptionsModal}
                isSignedIn={store.user.isSignedIn}
                imgUrl={store.user.imgUrl}
                initials={
                  store.user.isSignedIn &&
                  userService.getInitials(store.user.name)
                }
              />
            </div>
            <ThemeSwitcher
              className="theme-switcher"
              theme={store.theme}
              toggleTheme={toggleTheme}
            />
            <Svg cb={toggleSideMenu} size="3rem" className="hamburger">
              {getHamburgerIcon()}
            </Svg>
          </NavOptionsContainer>
        </NavbarContainerInner>
      </NavbarContainer>
      <UserOptionsMenu slide={isProfileMenu}>
        <span onClick={handleLogout}>logout</span>
        <span onClick={handleLogout}>login</span>
        <span onClick={handleLogout}>about</span>
      </UserOptionsMenu>

      <SideHamburger
        isSideMenuOpen={isSideMenuOpen}
        theme={store.theme}
        toggleTheme={toggleTheme}
        openPlaylistAddModal={openPlaylistAddModal}
        toggleSideMenu={toggleSideMenu}
      />

      <ScreenWrapper
        fade={isSideMenuOpen}
        index="7"
        darkenBg={true}
        cb={toggleSideMenu}
      />
      <ScreenWrapper
        fade={isProfileMenu}
        index="8"
        darkenBg={false}
        cb={toggleProfileOptionsModal}
      />
    </>
  );
});
