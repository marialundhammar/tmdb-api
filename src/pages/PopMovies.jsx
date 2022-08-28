import MovieCard from '../components/MovieCard';
import usePopMovie from '../hooks/usePopMovie';
import { Container, Col, Row } from 'react-bootstrap';

const PopularMoviesPage = () => {
  const { data, error, isLoading, isError } = usePopMovie();

  return (
    <Container className='py-3'>
      <h2>Popular Movies</h2>
      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}

      {data && <MovieCard data={data} />}
    </Container>
  );
};

export default PopularMoviesPage;
