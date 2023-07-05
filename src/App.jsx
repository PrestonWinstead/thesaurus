import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Root from './Root';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Root />
    </ThemeProvider>
  );
}

export default App;
