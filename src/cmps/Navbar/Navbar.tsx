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
} from './navbar-styles';
// Cmps
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';

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
    console.log('logging out');
  };
  return (
    <NavbarContainer isTopPage={isTopPage}>
      <NavbarContainerInner className="container-x">
        <Link to="/">
          <Text type="logo">VOX</Text>
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
            Create Playlist_
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

          <ThemeSwitcher toggleTheme={toggleTheme} />
        </NavOptionsContainer>
      </NavbarContainerInner>
    </NavbarContainer>
  );
});
