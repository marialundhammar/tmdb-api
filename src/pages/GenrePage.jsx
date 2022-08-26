import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';
import { Container, Row, Button } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import { useSearchParams } from 'react-router-dom';

const GenrePage = () => {
  /*  const [page, setPage] = useState(1); */

  const id = useParams();

  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });

  const page = searchParams.get('page');

  const { data, error, isError, isLoading } = useQuery(['genre', { id, page }], MoviesAPI.getSingleGenre);
  console.log({ id });
  console.log({ page });

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
            <h1>Genre: </h1>
            <MovieCard data={data} />
          </Row>

          <div className='pagination d-flex justify-content-between align-items-center mt-4'>
            <Button
              disabled={page === 1}
              variant='primary'
              onClick={() => setSearchParams({ page: `${Number(page) - 1}` })}
            >
              Previous Page
            </Button>

            <span>
              Page: {page} / {data.total_pages}
            </span>

            <Button
              disabled={page === data.total_pages}
              onClick={() => setSearchParams({ page: `${Number(page) + 1}` })}
              variant='primary'
            >
              Next Page
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default GenrePage;
