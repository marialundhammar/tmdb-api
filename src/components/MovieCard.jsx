import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const MovieCard = ({ data }) => {
  return (
    <>
      {data.results.map((movie) => (
        <Col>
          <Card key={movie.id}>
            <Card.Body>
              <Card.Img variant='Top' src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}></Card.Img>
              <Card.Title>Title: {movie.title}</Card.Title>
              <Card.Title>id: {movie.id}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MovieCard;
