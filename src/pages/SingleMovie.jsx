import { Container, Col, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';

const SingleMoviePage = () => {
  const { id } = useParams();
  const { data } = useQuery(['singleMovie', { id }], MoviesAPI.getSingleMovie);

  return <Container>{data && <h2>{data.title}</h2>}</Container>;
};

export default SingleMoviePage;
