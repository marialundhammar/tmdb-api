import React from 'react';
import { Card } from 'react-bootstrap';
import { Container, Row, Col, Image } from 'react-bootstrap';

const SingleMovieCard = ({ data }) => {
  return (
    <Container>
      <Row key={data.id} className='d-flex justify-content-between p-4'>
        <Col lg='3' md='5' sm='10' className='m-2'>
          <Image variant='Top' src={`https://image.tmdb.org/t/p/w300/` + data.poster_path}></Image>
        </Col>

        <Col lg='7' md='5' sm='10'>
          <h3>Title: {data.title}</h3>
          <p>Release date: {data.release_date}</p>

          <p className='my-4'>{data.overview}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleMovieCard;
