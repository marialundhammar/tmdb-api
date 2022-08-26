import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '?api_key=d601d125e240a2fd1b1f194d234095ee';
const ADULT = '&include_adult=false';

//function that makes the rest of the functions shorter and easier to read
const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

//get popular movies
export const getMoviesPopular = () => {
  return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}${ADULT}`);
};

export const getTopMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/top_rated${API_KEY}${ADULT}`);
};

export const getTheaterMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/now_playing${API_KEY}${ADULT}`);
};

export const getSingleMovie = ({ queryKey }) => {
  const [movie, { id }] = queryKey;
  return get(`${axios.defaults.baseURL}/movie/${id}${API_KEY}&append_to_response=credits`);
};

export const getSingleActor = ({ queryKey }) => {
  const [actor, { id }] = queryKey;
  return get(`${axios.defaults.baseURL}/person/${id}${API_KEY}&append_to_response=movie_credits${ADULT}`);
};

export const getGenres = () => {
  return get(`${axios.defaults.baseURL}/genre/movie/list${API_KEY}${ADULT}`);
};

export const getSingleGenre = ({ queryKey }) => {
  const [_key, { id, page }] = queryKey;
  return get(`${axios.defaults.baseURL}/discover/movie${API_KEY}&include_adult=false&with_genres=${id}&page=${page}`);
};

export default {
  getMoviesPopular,
  getTopMovies,
  getTheaterMovies,
  getSingleMovie,
  getSingleActor,
  getGenres,
  getSingleGenre,
};
