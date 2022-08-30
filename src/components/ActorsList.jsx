import React from 'react';
import { Card, ListGroup, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//List of all actors in a film
const ActorsList = ({ data }) => {
  return (
    <Container>
      <h3 className='m-2'>Actors in the movie:</h3>
      {data.credits.cast.map((cast) => (
        <Button as={Link} to={`/actor/${cast.id}`} key={cast.id} variant='outline-light m-2 '>
          {cast.name}
        </Button>
      ))}
    </Container>
  );
};

export default ActorsList;
