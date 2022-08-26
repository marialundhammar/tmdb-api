import MovieCard from '../components/MovieCard';
import usePopMovie from '../hooks/usePopMovie';
import { Container, Col, Row } from 'react-bootstrap';

const PopularMoviesPage = () => {
  const { data, error, isLoading, isError } = usePopMovie();

  return (
    <Container className='py-3'>
      <h1>Popular Movies</h1>
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

export default PopularMoviesPage;
