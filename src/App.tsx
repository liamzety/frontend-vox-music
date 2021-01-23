import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { observer } from 'mobx-react';
// Cmps
import { Navbar } from './cmps/Navbar/Navbar';
import { InstallPopup } from './cmps/InstallPopup/InstallPopup';
// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme';
import { GlobalStyles } from './assets/style/global';
// Store
import { useStore } from './store/StoreContext';
import { PlaylistAddModal } from './cmps/PlaylistAddModal/PlaylistAddModal';
import { ScreenWrapper } from './aux-cmps/ScreenWrapper/ScreenWrapper';
import { cookieService } from './services/cookieService';
import { Player } from './cmps/Player/Player';

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
    if (cookieService.getCookie('user')) {
      store.setUser(JSON.parse(cookieService.getCookie('user')));
    }
  }, []);

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
      {store.userMsg.isOn && (
        <h2
          style={{ color: store.userMsg.type === 'alert' ? 'yellow' : 'red' }}
        >
          {store.userMsg.msg}
        </h2>
      )}
      {store.player.isOn && <Player />}
    </ThemeProvider>
  );
});

export default App;
