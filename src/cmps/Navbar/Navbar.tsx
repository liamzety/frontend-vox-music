import React, { useState, useEffect, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';
// Store
import { useStore } from '../../store/StoreContext';
import { observer } from 'mobx-react';
// Styles
import {
  NavbarContainer,
  NavbarContainerInner,
  NavOptionsContainer,
  Logo,
} from './navbar-styles';
// Cmps
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { userService } from '../../services/userService';
import { UserMiniProfile } from '../../aux-cmps/UserMiniProfile/UserMiniProfile';
import { Menu } from '../../aux-cmps/Menu/Menu';
import { ScreenWrapper } from '../../aux-cmps/ScreenWrapper/ScreenWrapper';
import Fade from '@material-ui/core/Fade';

export const Navbar: React.FC = observer(() => {
  const store = useStore();
  const history = useHistory();

  const [isTopPage, setIsTopPage] = useState(true);
  const [isProfileMenu, setIsProfileModal] = useState(false);
  const handlePageScroll = useCallback((): void => {
    if (
      window.pageYOffset > window.innerHeight - 100 ||
      history.location.pathname !== '/'
    ) {
      setIsTopPage(false);
    } else {
      setIsTopPage(true);
    }
  }, [history.location.pathname]);

  useEffect(() => {
    history.listen(() => {
      handlePageScroll();
    });
    window.addEventListener('scroll', handlePageScroll);
    return () => {
      window.removeEventListener('scroll', handlePageScroll);
    };
  }, [history, handlePageScroll]);

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

  return (
    <>
      <NavbarContainer isTopPage={isTopPage}>
        <NavbarContainerInner className="container-x">
          <Link to="/">
            <Logo isTopPage={isTopPage} />
          </Link>
          <NavOptionsContainer isTopPage={isTopPage}>
            <Link to="/genre/All">
              <Text type="a">Genres</Text>
            </Link>
            <Button
              size="small"
              label="r35"
              cb={store.toggleModal.bind({}, 'addPlaylist')}
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

              <Menu fade={isProfileMenu}>
                <span onClick={handleLogout}>logout</span>
              </Menu>
              <ScreenWrapper
                fade={isProfileMenu}
                index="-1"
                darkenBg={false}
                cb={toggleProfileOptionsModal}
              />
            </div>
            <ThemeSwitcher theme={store.theme} toggleTheme={toggleTheme} />
          </NavOptionsContainer>
        </NavbarContainerInner>
      </NavbarContainer>
    </>
  );
});
