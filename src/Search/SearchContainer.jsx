import React, { useState } from 'react';
import Search from './Search';

import OpenAiService from '../Services/OpenAiService';

const SearchContainer = () => {
  const searchTypeOptions = ['synonym', 'antonym'];
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState(searchTypeOptions[0])
  const [results, setResults] = useState();
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    OpenAiService.getSynonym(search, searchType).then(res => {
      setResults(res.data.choices[0].text);
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