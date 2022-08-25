import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';
import { Container, Row, Button } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const GenrePage = () => {
  const [page, setPage] = useState(1);
  const { id } = useParams();
  /*   const { data, error, isError, isLoading, isPreviousData } = useQuery(
    ['genres', { id }, page],
    MoviesAPI.getSingleGenre,
    {
      keepPreviousData: true,
    }
  );
 */
  const { data, error, isError, isLoading } = useQuery(['genre', { id, page }], MoviesAPI.getSingleGenre);
  console.log(data);

  return (
    <Container className='py-3'>
      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}
      {data && (
        <>
          <Row>
            <h1>data.genre</h1>
            <MovieCard data={data} />
          </Row>

          <div className='pagination d-flex justify-content-between align-items-center mt-4'>
            <Button variant='primary' onClick={() => setPage((currentPage) => currentPage - 1)}>
              Previous Page
            </Button>

            <span>
              Page: {page} / {data.total_pages}
            </span>

            <Button onClick={() => setPage((currentPage) => currentPage + 1)} variant='primary'>
              Next Page
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default GenrePage;
