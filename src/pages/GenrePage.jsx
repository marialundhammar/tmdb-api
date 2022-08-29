import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';
import { Container, Row, Button, Col } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import Alert from 'react-bootstrap/Alert';
import { useSearchParams } from 'react-router-dom';
import GenreList from '../components/GenreList';

//Singe genre page
const GenrePage = () => {
  //set page number 1 when clicking in on a genre
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
  });

  //get the right page
  const page = searchParams.get('page');

  //find the right genre-id in the url
  const { id } = useParams();

  //Take in both the data for all the genres and the data for single genre that is clicked
  const { data: genresData } = useQuery(['genres'], MoviesAPI.getGenres);
  const { data: genreData, error, isError, isLoading } = useQuery(['genre', { id, page }], MoviesAPI.getSingleGenre);

  return (
    <Container className='py-3'>
      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}
      {genreData && (
        <>
          <Row>
            <Col>
              <GenreList data={genresData} id={id} />
            </Col>
          </Row>
          <Row>
            <Col>
              <MovieCard data={genreData} />
            </Col>
          </Row>

          <div className='d-flex justify-content-between align-items-center mt-4'>
            <Button
              disabled={page == 1}
              variant='primary'
              onClick={() => setSearchParams({ page: `${Number(page) - 1}` })}
            >
              Previous Page
            </Button>

            <span>
              Page: {page} / {genreData.total_pages}
            </span>

            <Button
              disabled={page === genreData.total_pages}
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
