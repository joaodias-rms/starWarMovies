import 'react-native-gesture-handler';
import React from 'react';
import {ThemeProvider} from 'styled-components';
import {Routes} from './src/routes';
import theme from './src/theme';
import {AuthProvider} from './src/hooks/auth';
import {MovieProvider} from './src/hooks/movies';
function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <MovieProvider>
          <Routes />
        </MovieProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
