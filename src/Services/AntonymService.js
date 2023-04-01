import axios from 'axios';


const AntonymService = {
  getAntonym: (search) => {
    return axios.get(`${process.env.REACT_APP_SERVER_URL}/antonyms`, { params: { search } });
  }
};

export default AntonymService;
