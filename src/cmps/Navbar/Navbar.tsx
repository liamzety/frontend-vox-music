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
import { Menu } from '../../aux-cmps/Menu/Menu';
import { SideHamburger } from '../SideHamburger/SideHamburger';
import { Svg } from '../../aux-cmps/Svg/Svg';

export const Navbar: React.FC = observer(() => {
  const { themeStore, userMsgStore, userStore, modalStore } = useStore();

  const [isProfileMenu, setIsProfileModal] = useState(false);

  const toggleTheme = (): void => {
    if (themeStore.theme === 'light') {
      themeStore.setTheme('dark');
    } else {
      themeStore.setTheme('light');
    }
  };
  const toggleProfileOptionsModal = () => {
    setIsProfileModal((prevState) => !prevState);
  };
  const handleLogout = () => {
    toggleProfileOptionsModal();
    try {
      userService.logout();
      userStore.resetUser();
      userMsgStore.alert({ type: 'success', msg: 'Logged out successfully.' });
      userMsgStore.clearAlert();
    } catch (err) {
      userMsgStore.alert(err);
      userMsgStore.clearAlert();
      console.error(err.msg);
    }
  };
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const openPlaylistAddModal = () => {
    modalStore.toggleModal('addPlaylist');
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
                onClick={userStore.user.isSignedIn && toggleProfileOptionsModal}
                isSignedIn={userStore.user.isSignedIn}
                profile_img={userStore.user.profile_img}
                initials={
                  userStore.user.isSignedIn &&
                  userService.getInitials(userStore.user.name)
                }
              />
            </div>
            <ThemeSwitcher
              className="theme-switcher"
              theme={themeStore.theme}
              toggleTheme={toggleTheme}
            />
            <Svg cb={toggleSideMenu} size="3rem" className="hamburger">
              {getHamburgerIcon()}
            </Svg>
          </NavOptionsContainer>
        </NavbarContainerInner>
      </NavbarContainer>

      <Menu
        position="fixed"
        top="70px"
        right="7%"
        closeCb={toggleProfileOptionsModal}
        className="user-options-menu"
        hideBorderTop={true}
        animation={{ type: 'slide', in: isProfileMenu }}
      >
        <span onClick={handleLogout}>logout</span>
        <span onClick={handleLogout}>login</span>
        <span onClick={handleLogout}>about</span>
      </Menu>

      <SideHamburger
        isSideMenuOpen={isSideMenuOpen}
        theme={themeStore.theme}
        toggleTheme={toggleTheme}
        openPlaylistAddModal={openPlaylistAddModal}
        toggleSideMenu={toggleSideMenu}
      />
      <ScreenWrapper
        fade={isSideMenuOpen}
        index="11"
        darkenBg={true}
        cb={toggleSideMenu}
      />
    </>
  );
});
