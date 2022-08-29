import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';
import { Container } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import GenreList from '../components/GenreList';

//Page for getting all the genres
const GenresPage = () => {
  const { data, error, isError, isLoading } = useQuery(['genres'], MoviesAPI.getGenres);

  return (
    <Container className='py-3' style={{ height: '100em' }}>
      <h2>Genres</h2>

      {isLoading && <p> Loading genres.. </p>}

      {isError && (
        <Alert variant='danger'>
          <h3> ERROR!!! </h3>
          <p>{error.message}</p>
        </Alert>
      )}

      {data && <GenreList data={data} />}
    </Container>
  );
};

export default GenresPage;
