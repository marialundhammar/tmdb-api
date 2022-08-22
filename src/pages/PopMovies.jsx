import React, { useEffect, useState } from 'react';
import MovieCard from '../components/MovieCard';
import usePopMovie from '../hooks/usePopMovie';
import Container from 'react-bootstrap/Container';

const PopularMoviePage = () => {
  const { data } = usePopMovie();

  return (
    <Container>
      <h1>Popular Movies</h1>
      {data && <MovieCard data={data} />}
    </Container>
  );
};

export default PopularMoviePage;
