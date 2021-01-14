import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
import { useObserver } from 'mobx-react';
// Cmps
import { Navbar } from './cmps/Navbar';
import InstallPopup from './cmps/InstallPopup';
// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme';
import { GlobalStyles } from './assets/style/global';
// Store
import { useStore } from './store/StoreContext';

function App() {
  const store = useStore();

  return useObserver(() => (
    <ThemeProvider theme={store.theme === 'light' ? lightTheme : darkTheme}>
      <main className="app">
        <GlobalStyles />
        <InstallPopup />
        <Navbar />
        <Router>
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                exact
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
    </ThemeProvider>
  ));
}

export default App;
