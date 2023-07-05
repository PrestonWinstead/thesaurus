import React from 'react';
import TitleSection from './TitleSection';
import Search from './Search';
import background from './img/pexels-stefan-stefancik.png';
import { styled } from '@mui/material/styles';

const Container = styled('div')(({ theme }) => ({
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
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column'
  }
}));

function Root() {
  const classes = {
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
    <Container>
      <TitleSection />
      <Search />
      <div style={classes.overlay} />
    </Container>
  );
}

export default Root;
