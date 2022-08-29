import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

//Moviecard that is used for dispalying all the films in different genres and catogories
const MovieCard = ({ data }) => {
  return (
    <Row>
      {data.results.map((movie) => (
        <Col className='d-flex justify-content-between align-items-center m-5' lg='2' md='6' sm='12' key={movie.id}>
          <Link to={`/movie/${movie.id}`}>
            <Card key={movie.id} className='d-flex card justify-content-between p-2 mx-5'>
              <Card.Body className=''>
                <Card.Img
                  variant='Top'
                  src={`https://image.tmdb.org/t/p/w200/` + movie.poster_path}
                  style={{ width: '12rem' }}
                ></Card.Img>

                <Card.Title className='p-2 card-title' style={{ width: '11rem' }}>
                  {' '}
                  {movie.title}
                </Card.Title>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default MovieCard;
