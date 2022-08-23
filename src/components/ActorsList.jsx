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
              <ListGroup.Item key={cast.id}>
                {cast.name}{' '}
                <Link to={`/actor/${cast.id}`} className='btn btn-primary' role='button'>
                  Read more
                </Link>{' '}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default ActorsList;
