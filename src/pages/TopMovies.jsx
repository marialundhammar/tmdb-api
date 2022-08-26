import MovieCard from '../components/MovieCard';
import { Container, Row } from 'react-bootstrap';
import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';

const TopMoviesPage = () => {
  const { data } = useQuery('topMovies', MoviesAPI.getTopMovies);

  return (
    <Container>
      <h1>Top Movies</h1>

      {data && (
        <Row>
          <MovieCard data={data} />
        </Row>
      )}
    </Container>
  );
};

export default TopMoviesPage;
