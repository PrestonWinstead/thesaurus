import React from 'react';
import Header from './Header';
import Search from './Search';

function App() {
  const classes = {
    body: {
      display: 'flex',
      flexDirection: 'column',
      width: '100vw',
      alignItems: 'center',
      justifyContent: 'center'
    },
    container: {
      display: 'flex',
      width: '100%',
      maxWidth: '900px',
      flexDirection: 'column'
    }
  }

  return (
    <div style={classes.body}>
      <div style={classes.container}>
        <Header />
        <Search />
      </div>
    </div>
  );
}

export default App;
