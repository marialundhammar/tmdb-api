import MoviesAPI from '../services/MoviesAPI';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import SingleActorCard from '../components/SingleActorCard';
import { Container } from 'react-bootstrap';

//Information about a single actor
const SingleActorPage = () => {
  //getting the actor id from the url
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(['singleMovie', { id }], MoviesAPI.getSingleActor);

  return (
    <Container className='py-3'>
      <h2>Actor</h2>

      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}

      {data && <SingleActorCard data={data} />}
    </Container>
  );
};

export default SingleActorPage;
