import axios from 'axios';


const SynonymService = {
  getSynonym: (search) => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}/synonyms`, { params: { search } });
  }
};

export default SynonymService;