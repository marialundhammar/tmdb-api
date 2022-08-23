import MovieCard from '../components/MovieCard';
import usePopMovie from '../hooks/usePopMovie';
import Container from 'react-bootstrap/Container';

const PopularMoviesPage = () => {
  const { data, error, isLoading, isError } = usePopMovie();

  return (
    <Container>
      <h1>Popular Movies</h1>

      {data && <MovieCard data={data} />}
    </Container>
  );
};

export default PopularMoviesPage;
