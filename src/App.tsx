import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
// Store
import { useStore } from './store/StoreContext';
import { observer } from 'mobx-react';
// Services
import { cookieService } from './services/cookieService';
// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme';
import { GlobalStyles } from './assets/style/main';
// Cmps
import { Navbar } from './cmps/Navbar/Navbar';
import { InstallPopup } from './cmps/InstallPopup/InstallPopup';
import { PlaylistAddModal } from './cmps/PlaylistAddModal/PlaylistAddModal';
import { ScreenWrapper } from './aux-cmps/ScreenWrapper/ScreenWrapper';
import { Player } from './cmps/Player/Player';
import { userService } from './services/userService';
import { AlertModal } from './aux-cmps/AlertModal/AlertModal';

const App = observer(() => {
  const store = useStore();
  const getModal = () => {
    switch (store.modal.type) {
      case 'addPlaylist':
        return <PlaylistAddModal />;
      default:
    }
  };
  useEffect(() => {
    if (cookieService.getCookie('userId')) {
      handleReturningUser();
    }
  }, []);
  const handleReturningUser = async () => {
    const user = await userService.getLoggedUser(
      JSON.parse(cookieService.getCookie('userId'))
    );
    store.setUser(user);
  };
  return (
    <ThemeProvider theme={store.theme === 'light' ? lightTheme : darkTheme}>
      <main className="app">
        <GlobalStyles />
        {/* <InstallPopup /> */}
        {/* <PlaylistAddModal /> */}
        <Router>
          {store.modal.isOn && getModal()}
          {store.modal.isOn && <ScreenWrapper />}
          <Navbar />
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                component={route.component}
                path={route.path}
              />
            ))}
          </Switch>
        </Router>
      </main>
      <AlertModal userMsg={store.userMsg} />
      {store.player.isOn && <Player />}
    </ThemeProvider>
  );
});

export default App;
