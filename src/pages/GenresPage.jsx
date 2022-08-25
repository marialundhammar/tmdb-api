import MoviesAPI from '../services/MoviesAPI';
import { useQuery } from 'react-query';
import { Container, Row, Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Alert from 'react-bootstrap/Alert';

const GenresPage = () => {
  const { data, error, isError, isLoading } = useQuery(['genres'], MoviesAPI.getGenres);
  console.log({ data });

  return (
    <Container className='py-3'>
      <h1>Genres</h1>

      {isLoading && <p> Loading genres </p>}

      {isError && (
        <Alert variant='danger'>
          <h3> ERROR!!! </h3>
          <p>{error.message}</p>
        </Alert>
      )}

      {data && (
        <Card>
          <Card.Body>
            <ListGroup>
              {data.genres.map((genre) => (
                <ListGroup.Item key={genre.id} as={Link} to={`/genre/${genre.id}`}>
                  {genre.name}
                  {genre.id}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default GenresPage;
