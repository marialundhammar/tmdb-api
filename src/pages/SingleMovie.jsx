import { Container, Col, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';
import SingleMovieCard from '../components/SingleMovieCard';
import ActorsList from '../components/ActorsList';
import React from 'react';
import GenreList from '../components/GenreList';

const SingleMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(['singleMovie', { id }], MoviesAPI.getSingleMovie);

  return (
    <Container className='py-3'>
      <h2>Single Movies</h2>

      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}
      {data && (
        <>
          <Row className='single-movie-body'>
            <Col className="lg='3' md='5' sm='10'">
              <SingleMovieCard data={data} />
              <ActorsList data={data} />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default SingleMoviePage;
