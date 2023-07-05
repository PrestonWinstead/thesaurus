import React, { useState } from 'react';
import Search from './Search';

import SynonymService from '../Services/SynonymService';
import AntonymService from '../Services/AntonymService';

const SearchContainer = () => {
  const searchTypeOptions = ['synonyms', 'antonyms'];
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState(searchTypeOptions[0])
  const [results, setResults] = useState('');
  const [loading, setLoading] = useState(false);
  const [pastResults, setPastResults] = useState([]);
  const [pastSearches, setPastSearches] = useState([]);
  const [pastSearchTypes, setPastSearchTypes] = useState([]);

  const onSubmit = () => {
    setLoading(true);
    if (search) {
      setPastResults(pastResults.concat(results));
      setPastSearches(pastSearches.concat(search));
      setPastSearchTypes(pastSearchTypes.concat(searchType));
    }
    const service = searchType === 'synonyms' ? SynonymService.getSynonym : AntonymService.getAntonym;
    service(search).then(res => {
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
      search={search}
      pastResults={pastResults}
      pastSearches={pastSearches}
      pastSearchTypes={pastSearchTypes}
    />
  )
};

export default SearchContainer;