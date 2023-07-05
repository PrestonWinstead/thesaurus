import React from 'react';
import capitalize from 'lodash/capitalize'
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import logo from '../img/logo-transparent.png'

const Search = ({
  setSearch,
  onSubmit,
  results,
  searchType,
  setSearchType,
  searchTypeOptions,
  onSearchKeydown,
  loading,
  search
}) => {
  const classes = {
    container: {
      marginRight: '10%',
      width: '75%',
      height: 'calc(100% - 32px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxSizing: 'border-box',
      padding: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.7)',
      borderRadius: 12,
      justifyContent: 'flex-end',
      overflowY: 'scroll',
      zIndex: 1,
      color: '#FFFFFF'
    },
    loadingContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    },
    prompt: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    },
    avatar: {
      height: 35,
      width: 35,
      backgroundColor: '#000000',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    image: {
      width: 25,
      height: 25
    },
    button: {
      backgroundColor: '#FFFFFF',
      color: 'darkgray',
      '& .MuiDisabled': {
        backgroundColor: 'darkgray',
        color: '#000000'
      }
    }
  }

  const handleChange = e => {
    setSearchType(e.target.value);
  }

  return (
    <div style={classes.container}>
      <div style={classes.prompt}>
        <div style={classes.avatar}>
          <img style={classes.image} src={logo} alt="Logo" />
        </div>
        <h4>Welcome to Thesaurus.ai! Enter a search below to generate your first list.</h4>
      </div>
      <OutlinedInput
        onChange={setSearch}
        variant="outlined"
        placeholder="Search any word, name, or phrase"
        fullWidth
        onKeyDown={onSearchKeydown}
        color="secondary"
      />
      <TextField
        select
        onChange={handleChange}
        label="I'm looking for..."
        color="secondary"
      >
        {searchTypeOptions.map(option => (
          <MenuItem key={option} value={option}>{capitalize(option)}</MenuItem>
        ))}
      </TextField>
      {loading ? (
        <div style={classes.loadingContainer}>
          <CircularProgress />
        </div>
      ) : (
        <Button style={classes.button} onClick={onSubmit} disabled={!search || !searchType}>Generate List</Button>
      )}
      {results ? results.split('\n').map(option => option ? (
        <p style={{ margin: 0 }}>{option}</p>
      ) : null) : null}
    </div>
  )
};

export default Search;