import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavbarContainer,
  NavbarContainerInner,
} from '../assets/style/components/navbar';
import { useStore } from '../store/StoreContext';

export const Navbar = () => {
  const store = useStore();

  const toggleTheme = (): void => {
    if (store.theme === 'light') store.setTheme('dark');
    else store.setTheme('light');
  };
  return (
    <NavbarContainer>
      <NavbarContainerInner className="container-x">
        <h1>LOGO</h1>
        <div>
          <Link to="/about"></Link>
          <Link to="/genre"></Link>
          <button>Create Playlist</button>
          <button>P</button>
          <button onClick={toggleTheme}>Toggle theme</button>
        </div>
      </NavbarContainerInner>
    </NavbarContainer>
  );
};
