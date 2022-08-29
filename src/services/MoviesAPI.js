import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//importing the API-key from .env file
const API_KEY_IMPORT = import.meta.env.VITE_API_KEY;

//adding API info to the key so I do not need to add it every time
const API_KEY = `?api_key=${API_KEY_IMPORT}`;

//Creating a variable for not including adult
const ADULT = '&include_adult=false';

//function that makes the rest of the functions shorter and easier to read ;)
const get = async (endpoint) => {
  const response = await axios.get(endpoint);
  return response.data;
};

//get popular movies
export const getMoviesPopular = () => {
  return get(`${axios.defaults.baseURL}/movie/popular${API_KEY}${ADULT}`);
};

//getting top rated movies
export const getTopMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/top_rated${API_KEY}${ADULT}`);
};

//getting films at the cinema
export const getTheaterMovies = () => {
  return get(`${axios.defaults.baseURL}/movie/now_playing${API_KEY}${ADULT}`);
};

//get info about a single movie
export const getSingleMovie = ({ queryKey }) => {
  const [movie, { id }] = queryKey;
  return get(`${axios.defaults.baseURL}/movie/${id}${API_KEY}&append_to_response=credits`);
};

//get info about a single actor
export const getSingleActor = ({ queryKey }) => {
  const [actor, { id }] = queryKey;
  return get(`${axios.defaults.baseURL}/person/${id}${API_KEY}&append_to_response=movie_credits${ADULT}`);
};

//gets all the genres
export const getGenres = () => {
  return get(`${axios.defaults.baseURL}/genre/movie/list${API_KEY}${ADULT}`);
};

//get info about a single genre
export const getSingleGenre = ({ queryKey }) => {
  const [_key, { id, page }] = queryKey;
  return get(`${axios.defaults.baseURL}/discover/movie${API_KEY}${ADULT}&with_genres=${id}&page=${page}`);
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
