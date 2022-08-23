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

export const getTopMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/top_rated${API_KEY}`);
};

export const getTheaterMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/now_playing${API_KEY}`);
};

export const getSingleMovie = ({ queryKey }) => {
  const [movie, { id }] = queryKey;
  return get(`${axios.defaults.baseURL}/movie/${id}${API_KEY}`);
};

export default {
  getMoviesPopular,
  getTopMovies,
  getTheaterMovies,
  getSingleMovie,
};
