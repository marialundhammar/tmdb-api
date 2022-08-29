import React from 'react';
import { Card, ListGroup, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActorsList = ({ data }) => {
  return (
    <Container>
      <h3>Actors in the movie:</h3>
      {data.credits.cast.map((cast) => (
        <Link to={`/actor/${cast.id}`} key={cast.id} className='genres btn' role='Button'>
          {cast.name}
        </Link>
      ))}
    </Container>
  );
};

export default ActorsList;
