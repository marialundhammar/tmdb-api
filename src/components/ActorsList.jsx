import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ActorsList = ({ data }) => {
  return (
    <>
      <Card key={data.id} style={{ width: '30%' }}>
        <Card.Title>Actors</Card.Title>

        <Card.Body>
          <ListGroup>
            {data.credits.cast.map((cast) => (
              <ListGroup.Item key={cast.id} as={Link} to={`/actor/${cast.id}`}>
                {cast.name}
                {cast.id}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ActorsList;
