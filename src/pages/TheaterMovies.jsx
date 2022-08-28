import MovieCard from '../components/MovieCard';
import { Container, Row } from 'react-bootstrap';
import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';

const TopMoviesPage = () => {
  const { data, isLoading, isError, error } = useQuery('theaterMovies', MoviesAPI.getTheaterMovies);

  return (
    <Container>
      <h2>Movies at theater </h2>

      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}

      {data && (
        <Row>
          <MovieCard data={data} />
        </Row>
      )}
    </Container>
  );
};

export default TopMoviesPage;
