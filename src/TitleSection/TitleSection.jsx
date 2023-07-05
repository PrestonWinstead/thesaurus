import React from 'react';
import logo from '../img/logo-transparent.png'
import { styled } from '@mui/material/styles';

const Logo = styled('img')(({ theme }) => ({
  width: '90%',
  maxWidth: 150,
  [theme.breakpoints.down('lg')]: {
    width: 42,
    height: 42,
    maxWidth: 'unset'
  }
}));

const Container = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  padding: 24,
  color: '#FFFFFF',
  flexDirection: 'column',
  boxSizing: 'border-box',
  zIndex: 1
}));

const Header = styled('h1')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    marginBottom: 4
  }
}));

const Subheader = styled('h3')(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    marginTop: 0
  }
}))

const TitleSection = () => {

  return (
    <Container>
      <Logo src={logo} alt="Logo" />
      <Header>THESAURUS.ai</Header>
      <Subheader>Explore & Discover</Subheader>
    </Container>
  )
};

export default TitleSection;