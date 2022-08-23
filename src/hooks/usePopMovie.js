import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';

const usePopMovie = () => {
  return useQuery('popMovies', MoviesAPI.getMoviesPopular);
};

export default usePopMovie;
