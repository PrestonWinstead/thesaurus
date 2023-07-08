import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Root from './Root';
import usRedirectToHttps from './custom-hooks/useRedirectToHttps';

function App() {
  usRedirectToHttps();
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
