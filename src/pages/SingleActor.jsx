import MoviesAPI from '../services/MoviesAPI';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { Container, Col, Row, Card } from 'react-bootstrap';

const SingleActorPage = () => {
  const { id } = useParams();
  const { data } = useQuery(['singleActor', { id }], MoviesAPI.getSingleActor);

  console.log(data);

  return (
    <Container className='py-3'>
      <h1>Single Actor</h1>
    </Container>
  );
};

export default SingleActorPage;
