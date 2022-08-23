import MovieCard from '../components/MovieCard';
import { Container, Row } from 'react-bootstrap';
import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';

const TopMoviesPage = () => {
  const { data } = useQuery('theaterMovies', MoviesAPI.getTheaterMovies);

  return (
    <Container>
      <h1>Popular Movies</h1>

      {data && (
        <Row>
          <MovieCard data={data} />
        </Row>
      )}
    </Container>
  );
};

export default TopMoviesPage;
