import { useQuery } from 'react-query';
import MovieAPI from '../services/MovieAPI';

const usePopMovie = () => {
  return useQuery('popMovies', MovieAPI.getMoviesPopular);
};

export default usePopMovie;
