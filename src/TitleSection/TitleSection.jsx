import React from 'react';
import logo from '../img/logo-transparent.png'

const TitleSection = () => {
  const classes = {
    container: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      padding: 24,
      color: '#FFFFFF',
      flexDirection: 'column',
      boxSizing: 'border-box',
      zIndex: 1
    },
    image: {
      width: '90%',
      maxWidth: 150
    }
  }

  return (
    <div style={classes.container}>
      <img style={classes.image} src={logo} alt="Logo" />
      <h1>THESAURUS.ai</h1>
      <h3>disover and explore</h3>
    </div>
  )
};

export default TitleSection;