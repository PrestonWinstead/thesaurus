import React from 'react';
import capitalize from 'lodash/capitalize'
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

const Search = ({
  setSearch,
  onSubmit,
  results,
  searchType,
  setSearchType,
  searchTypeOptions,
  onSearchKeydown,
  loading
}) => {
  const classes = {
    container: {
      marginTop: 16,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      boxSizing: 'border-box',
      padding: 8
    },
    loadingContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center'
    }
  }

  const handleChange = e => {
    setSearchType(e.target.value);
  }

  return (
    <div style={classes.container}>
      <OutlinedInput
        onChange={setSearch}
        variant="outlined"
        placeholder="Search any dang word you can think of"
        fullWidth
        onKeyDown={onSearchKeydown}
      />
      <TextField
        select
        onChange={handleChange}
        label="More options for your awesome word"
      >
        {searchTypeOptions.map(option => (
          <MenuItem key={option} value={option}>{capitalize(option)}</MenuItem>
        ))}
      </TextField>
      {loading ? <div style={classes.loadingContainer}><CircularProgress /></div> : <Button onClick={onSubmit}>Submit</Button>}
      {results ? results.split('\n').map(option => option ? (
        <p style={{ margin: 0 }}>{option}</p>
      ) : null) : null}
    </div>
  )
};

export default Search;