import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// store
import { useStore } from '../../store/StoreContext';
//styles
import {
  NavbarContainer,
  NavbarContainerInner,
  NavOptionsContainer,
} from './navbar-styles';
import { ThemeSwitcher } from '../../aux-cmps/ThemeSwitcher/ThemeSwitcher';

export const Navbar: React.FC = () => {
  const store = useStore();
  const [isTopPage, setIsTopPage] = useState(true);
  useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset > window.innerHeight) {
        setIsTopPage(false);
      } else {
        setIsTopPage(true);
      }
    };
  }, []);
  const toggleTheme = (): void => {
    console.log('here');
    if (store.theme === 'light') {
      store.setTheme('dark');
    } else {
      store.setTheme('light');
    }
  };
  return (
    <NavbarContainer isTopPage={isTopPage}>
      <NavbarContainerInner className="container-x">
        <h1>LOGO</h1>
        <NavOptionsContainer>
          <Link to="/about"></Link>
          <Link to="/genre"></Link>
          {!isTopPage && (
            <button onClick={store.toggleModal.bind({}, 'addPlaylist')}>
              Create Playlist
            </button>
          )}
          <button>P</button>
          <ThemeSwitcher toggleTheme={toggleTheme} />
        </NavOptionsContainer>
      </NavbarContainerInner>
    </NavbarContainer>
  );
};
