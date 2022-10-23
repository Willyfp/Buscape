import React from 'react';
import { Provider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider } from 'react-redux';

import Routes from './src/Routes';
import store from './src/store';
import { enableLatestRenderer } from 'react-native-maps';
import 'react-native-gesture-handler';

enableLatestRenderer();

export const themeStyledComponents = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#61A2DA',
    secondary: '#FFFFFF',
    error: '#FF2D00',
    text: {
      primary: '#000000',
      secondary: '#FFFFFF',
    },
  },
  dark: false,
};

const App = () => {
  return (
    <StoreProvider store={store}>
      <ThemeProvider theme={themeStyledComponents}>
        <Provider>
          <Routes />
        </Provider>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
