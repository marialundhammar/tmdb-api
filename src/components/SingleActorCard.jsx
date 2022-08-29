import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MovieCard from './MovieCard';

const SingleActorCard = ({ data }) => {
  return (
    <>
      <Container key={data.id}>
        <Row></Row>
        <Row className='d-flex justify-content-between p-4'>
          <Col lg='3' md='5' sm='10'>
            <Image src={'https://image.tmdb.org/t/p/w400' + data.profile_path} fluid></Image>
          </Col>
          <Col lg='8' md='5' sm='10' className='py-2'>
            <h3>{data.name}</h3>
            <h4> Born: {data.birthday} </h4>
            <p>{data.biography}</p>
          </Col>
        </Row>

        <Row className='d-flex justify-content-center'>
          <Col lg='12' md='5' sm='10' className=''>
            <h3>Films {data.name} has been in:</h3>

            {data.movie_credits.cast.map((movie) => (
              <Button key={movie.id} href={`/movie/${movie.id}`} className='genres'>
                {movie.original_title}
              </Button>
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SingleActorCard;
