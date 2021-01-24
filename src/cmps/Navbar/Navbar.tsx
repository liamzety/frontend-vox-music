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
  UnkownUserPng,
  Logo,
} from './navbar-styles';
// Cmps
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { userService } from '../../services/userService';

export const Navbar: React.FC = observer(() => {
  const store = useStore();
  const history = useHistory();

  const [isTopPage, setIsTopPage] = useState(true);
  const [profileModal, setProfileModal] = useState({
    isOn: false,
  });
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
    setProfileModal((prevState) => {
      return {
        ...prevState,
        isOn: !prevState.isOn,
      };
    });
  };
  const handleLogout = () => {
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
    <NavbarContainer isTopPage={isTopPage}>
      <NavbarContainerInner className="container-x">
        <Link to="/">
          <Logo isTopPage={isTopPage} />
          {/* <Text type="logo">VOX</Text> */}
        </Link>
        <NavOptionsContainer isTopPage={isTopPage}>
          <Link to="/genre">
            <Text type="a">Genres</Text>
          </Link>
          <Button
            size="small"
            label="r35"
            cb={store.toggleModal.bind({}, 'addPlaylist')}
          >
            New Playlist_
          </Button>

          {store.user.isSignedIn ? (
            <div onClick={toggleProfileOptionsModal}>
              <img src={store.user.imgUrl} alt="" />
              <h1>{store.user.name}</h1>
              {profileModal.isOn && (
                <button onClick={handleLogout}>logout</button>
              )}
            </div>
          ) : (
            <Link to={`/login`}>
              <UnkownUserPng />
            </Link>
          )}

          <ThemeSwitcher theme={store.theme} toggleTheme={toggleTheme} />
        </NavOptionsContainer>
      </NavbarContainerInner>
    </NavbarContainer>
  );
});
