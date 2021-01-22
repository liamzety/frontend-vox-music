import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
// store
import { useStore } from '../../store/StoreContext';
//styles
import {
  NavbarContainer,
  NavbarContainerInner,
  NavOptionsContainer,
} from './navbar-styles';
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';
import { Button } from '../../aux-cmps/Button/Button';
import { Text } from '../../aux-cmps/Text/Text';
import { Svg } from '../../aux-cmps/Svg/Svg';
import { AiOutlineUser } from 'react-icons/ai';
import { useObserver } from 'mobx-react';

export const Navbar: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  const [isTopPage, setIsTopPage] = useState(true);
  const [profileModal, setProfileModal] = useState({
    isOn: false,
  });

  useEffect(() => {
    history.listen((location) => {
      if (
        window.pageYOffset > window.innerHeight - 100 ||
        location.pathname !== '/'
      ) {
        setIsTopPage(false);
      } else {
        setIsTopPage(true);
      }
    });
    window.onscroll = function () {
      if (
        window.pageYOffset > window.innerHeight - 100 ||
        history.location.pathname !== '/'
      ) {
        setIsTopPage(false);
      } else {
        setIsTopPage(true);
      }
    };
  }, [history]);
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
  return useObserver(() => (
    <NavbarContainer isTopPage={isTopPage}>
      <NavbarContainerInner className="container-x">
        <Link to="/">
          <Text type="logo">VOX</Text>
        </Link>
        <NavOptionsContainer>
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
              <Text type="a">
                <Svg size="1.3rem">
                  <AiOutlineUser />
                </Svg>
                Log in
              </Text>
            </Link>
          )}

          <ThemeSwitcher toggleTheme={toggleTheme} />
        </NavOptionsContainer>
      </NavbarContainerInner>
    </NavbarContainer>
  ));
};
