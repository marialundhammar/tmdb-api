import React from 'react';
import { Card, ListGroup, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActorsList = ({ data }) => {
  return (
    <Container>
      <h3>Actors in the movie:</h3>
      {data.credits.cast.map((cast) => (
        <Button key={cast.id} href={`/actor/${cast.id}`} className='m-2 genres'>
          {cast.name}
        </Button>
      ))}
    </Container>
  );
};

export default ActorsList;
