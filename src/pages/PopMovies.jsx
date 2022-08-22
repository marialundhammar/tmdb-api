import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Col, Card } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';
import MovieAPI from '../services/MovieAPI';

const PopularFilmsPage = () => {
  const { data } = useQuery(['popMovie'], MovieAPI.getMoviesPopular);

  return (
    <>
      {data && (
        <Row>
          {data.results.map((movie) => (
            <Col>
              <Card key={movie.title}>
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Title>{movie.id}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default PopularFilmsPage;
