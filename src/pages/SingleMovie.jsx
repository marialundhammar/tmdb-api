import { Container, Col, Row, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import MoviesAPI from '../services/MoviesAPI';
import SingleMovieCard from '../components/SingleMovieCard';
import ActorsList from '../components/ActorsList';
import React from 'react';

const SingleMoviePage = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useQuery(['singleMovie', { id }], MoviesAPI.getSingleMovie);

  return (
    <Container className='py-3'>
      <h1>Single Movies</h1>

      {isLoading && <p>Loading movies...</p>}

      {isError && (
        <Alert variant='danger'>
          <h3>ERROR!</h3>
          <p>{error.message}</p>
        </Alert>
      )}
      {data && (
        <Row>
          <SingleMovieCard data={data} />
          <ActorsList data={data} />

          <h3>Genres:</h3>
          <ul>
            {data.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </Row>
      )}
    </Container>
  );
};

export default SingleMoviePage;
