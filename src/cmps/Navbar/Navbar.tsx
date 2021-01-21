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

export const Navbar: React.FC = () => {
  const store = useStore();
  const history = useHistory();

  const [isTopPage, setIsTopPage] = useState(true);
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
  return (
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
          <Button cb={() => {}} size="small" label="x11">
            <Svg size="1.3rem">
              <AiOutlineUser />
            </Svg>
            Profile
          </Button>
          <ThemeSwitcher toggleTheme={toggleTheme} />
        </NavOptionsContainer>
      </NavbarContainerInner>
    </NavbarContainer>
  );
};
