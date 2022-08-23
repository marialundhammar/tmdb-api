import React from 'react';
import { Card } from 'react-bootstrap';

const SingleMovieCard = ({ data }) => {
  return (
    <>
      <Card key={data.id} style={{ width: '30%' }}>
        <Card.Body>
          <Card.Img variant='Top' src={`https://image.tmdb.org/t/p/w200/` + data.poster_path}></Card.Img>
          <Card.Title>Title: {data.title}</Card.Title>
          <Card.Title>id: {data.id}</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
};

export default SingleMovieCard;
