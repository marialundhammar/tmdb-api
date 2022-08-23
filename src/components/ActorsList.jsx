import React from 'react';
import { Card } from 'react-bootstrap';

const ActorsList = ({ data }) => {
  return (
    <>
      <Card key={data.id} style={{ width: '30%' }}>
        <Card.Title>Actors</Card.Title>
        <Card.Body>
          <ul>
            {data.credits.cast.map((cast) => (
              <li key={cast.id}>{cast.name}</li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </>
  );
};

export default ActorsList;
