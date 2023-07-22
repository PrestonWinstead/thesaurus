import React from 'react';
import logo from '../img/logo-transparent.png';
import capitalize from 'lodash/capitalize';

const ResultsList = ({ results, searchType, search }) => {
  const classes = {
    image: {
      width: 25,
      height: 25
    },
    imageContainer: {
      height: 35,
      width: 35,
      backgroundColor: '#000000',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    },
    flexRow: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    },
    resultsContainer: {
      paddingLeft: 51,
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginTop: 12
    }
  }
  return (
    <div>
      <div style={classes.flexRow}>
        <span style={classes.imageContainer}>
          <img style={classes.image} src={logo} alt="Logo" />
        </span>
        <span><b>{capitalize(searchType)} for "{search}"</b></span>
      </div>
      <div style={classes.resultsContainer}>
        {results ? results.split('\n').map(option => option ? (
          <p key={option} style={{ margin: 0 }}>{option}</p>
        ) : null) : null}
      </div>
    </div>
  );
}

export default ResultsList;