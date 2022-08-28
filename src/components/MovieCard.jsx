import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({ data }) => {
  return (
    <Row>
      {data.results.map((movie) => (
        <Col className='d-flex justify-content-between align-items-center m-5' lg='2' md='5' sm='10'>
          <Link to={`/movie/${movie.id}`} className='mx-3'>
            <Card key={movie.id} className='d-flex card justify-content-between p-1'>
              <Card.Body className='d-flex flex-column justify-content-center'>
                <Card.Img
                  variant='Top'
                  src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
                  style={{ width: '15rem' }}
                ></Card.Img>
                <Card.Title className='my-3 card-title'> Title: {movie.title}</Card.Title>

                <Link to={`/movie/${movie.id}`} className='btn btn-primary' role='button'>
                  Read more
                </Link>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default MovieCard;
