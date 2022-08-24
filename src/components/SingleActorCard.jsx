import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const SingleActorCard = ({ data }) => {
  return (
    <>
      <Card key={data.id}>
        <Card.Title>{data.name}</Card.Title>

        <Card.Body>
          <Card.Text>Films {data.name} has been in: </Card.Text>
          <ListGroup>
            {data.movie_credits.cast.map((movie) => (
              <ListGroup.Item key={movie.id}>{movie.original_title}</ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleActorCard;
