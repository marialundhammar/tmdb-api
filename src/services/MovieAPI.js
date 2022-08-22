import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=d601d125e240a2fd1b1f194d234095ee';

const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

export const getMoviesPopular = () => {
  return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}`);
};

export default {
  getMoviesPopular,
};
