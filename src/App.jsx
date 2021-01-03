import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import routes from './routes';
// Cmps
import { Navbar } from './cmps/Navbar';
import InstallPopup from './cmps/InstallPopup';
// Styles
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './assets/style/theme';
import { GlobalStyles } from './assets/style/global';

function App() {
  const { theme } = useSelector(state => state.themeReducer)

  return (

    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <main className="app">
        <GlobalStyles />
        <InstallPopup />
        <Navbar />
        <Router>
          <Switch>
            {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
          </Switch>
        </Router>
      </main>
    </ThemeProvider>

  );
}

export default App;





