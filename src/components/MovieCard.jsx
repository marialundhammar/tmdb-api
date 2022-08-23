import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }) => {
  return (
    <>
      {data.results.map((movie) => (
        <Card key={movie.id} style={{ width: '30%' }}>
          <Card.Body>
            <Card.Img variant='Top' src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}></Card.Img>
            <Card.Title>Title: {movie.title}</Card.Title>
            <Card.Title>id: {movie.id}</Card.Title>
            <Link to={`/movie/${movie.id}`} className='btn btn-primary' role='button'>
              Read more
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default MovieCard;
