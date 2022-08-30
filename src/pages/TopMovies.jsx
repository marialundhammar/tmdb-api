import MovieCard from '../components/MovieCard';
import { Container, Row } from 'react-bootstrap';
import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';

//getting top movies
const TopMoviesPage = () => {
  const { data } = useQuery('topMovies', MoviesAPI.getTopMovies);

  return (
    <Container>
      <h2>Top Movies</h2>

      {data && (
        <Row>
          <MovieCard data={data} />
        </Row>
      )}
    </Container>
  );
};

export default TopMoviesPage;
