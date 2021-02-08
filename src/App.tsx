import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
// Store
import { useStore } from './store/StoreContext';
import { observer } from 'mobx-react';
// Services
import { cookieService } from './services/cookieService';
import { userService } from './services/userService';
// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme';
import { GlobalStyles } from './assets/style/main';
// Cmps
import { Navbar } from './cmps/Navbar/Navbar';
import { InstallPopup } from './cmps/InstallPopup/InstallPopup';
import { Player } from './cmps/Player/Player';
import { AlertModal } from './aux-cmps/AlertModal/AlertModal';
import { Modal } from './aux-cmps/Modal/Modal';

const App = observer(() => {
  const { modalStore, userStore, themeStore, userMsgStore } = useStore();

  useEffect(() => {
    if (cookieService.getCookie('userId')) {
      handleReturningUser();
    }
  }, []);
  const handleReturningUser = async () => {
    const user = await userService.getLoggedUser(
      JSON.parse(cookieService.getCookie('userId'))
    );
    userStore.setUser(user);
  };
  return (
    <ThemeProvider
      theme={themeStore.theme === 'light' ? lightTheme : darkTheme}
    >
      <main className="app">
        <GlobalStyles />
        {/* <InstallPopup /> */}
        <Router>
          <Modal
            closeCb={() => {
              modalStore.toggleModal();
            }}
            type={modalStore.modalType}
            // type={'updatePlaylist'}
          />

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
      <AlertModal userMsg={userMsgStore.userMsg} />
      {/* <Player /> */}
    </ThemeProvider>
  );
});

export default App;
