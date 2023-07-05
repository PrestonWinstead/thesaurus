import React from 'react';
import TitleSection from './TitleSection';
import Search from './Search';
import { screens } from './styles/breakpoints';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import background from './img/pexels-stefan-stefancik.png';

function App() {
  const classes = {
    body: {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000000',
      overflow: 'hidden',
      background: `url(${background})`,
      backgroundPositionY: 'center',
      [screens.small]: {
        flexDirection: 'column'
      }
    },
    overlay: {
      backgroundColor: '#000000',
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: .6,
      zIndex: 0
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <div style={classes.body}>
        <TitleSection />
        <Search />
        <div style={classes.overlay} />
      </div>
    </ThemeProvider>
  );
}

export default App;
