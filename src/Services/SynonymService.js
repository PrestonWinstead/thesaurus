import axios from 'axios';


const SynonymService = {
  getSynonym: (search) => {
    return axios.get(`http://localhost:5000/synonyms`, { params: { search } });
  }
};

export default SynonymService;