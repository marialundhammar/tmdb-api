import MoviesAPI from '../services/MoviesAPI';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import SingleActorCard from '../components/SingleActorCard';
import { Container, Row } from 'react-bootstrap';

const SingleActorPage = () => {
  const { id } = useParams();
  const { data } = useQuery(['singleMovie', { id }], MoviesAPI.getSingleActor);

  console.log(data);

  return (
    <Container className='py-3'>
      <h1>Actor</h1>
      {data && (
        <Row>
          <SingleActorCard data={data} />
        </Row>
      )}
    </Container>
  );
};

export default SingleActorPage;
