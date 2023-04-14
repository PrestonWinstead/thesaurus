import React from 'react';
import TitleSection from './TitleSection';
import Search from './Search';

function App() {
  const classes = {
    body: {
      display: 'flex',
      flexDirection: 'row',
      width: '100vw',
      height: '100vh',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'midnightblue'
    }
  }

  return (
    <div style={classes.body}>
      <TitleSection />
      <Search />
    </div>
  );
}

export default App;
