import React, { useState } from 'react';
import Search from './Search';

import SynonymService from '../Services/SynonymService';

const SearchContainer = () => {
  const searchTypeOptions = ['synonym', 'antonym'];
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState(searchTypeOptions[0])
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    SynonymService.getSynonym(search).then(res => {
      setResults(res.data[0]);
    }).finally(() => {
      setLoading(false);
    });
  };

  const onSearchChange = e => {
    setSearch(e.target.value);
  }

  const onSearchKeydown = e => {
    if (e.key === 'Enter') {
      onSubmit();
    }
  }

  return (
    <Search
      setSearch={onSearchChange}
      onSubmit={onSubmit}
      results={results}
      searchTypeOptions={searchTypeOptions}
      searchType={searchType}
      setSearchType={setSearchType}
      onSearchKeydown={onSearchKeydown}
      loading={loading}
    />
  )
};

export default SearchContainer;