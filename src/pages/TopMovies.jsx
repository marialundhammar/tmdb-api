import MovieCard from '../components/MovieCard';
import Container from 'react-bootstrap/Container';
import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';

const TopMoviesPage = () => {
  const { data } = useQuery('topMovies', MoviesAPI.getTopMovies);

  return (
    <Container>
      <h1>Popular Movies</h1>

      {data && <MovieCard data={data} />}
    </Container>
  );
};

export default TopMoviesPage;
