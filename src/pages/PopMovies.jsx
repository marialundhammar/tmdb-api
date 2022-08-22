import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import MovieCard from '../components/MovieCard';
import MovieAPI from '../services/MovieAPI';

const PopularMoviePage = () => {
  const { data } = useQuery(['popMovie'], MovieAPI.getMoviesPopular);

  return <>{data && <MovieCard data={data} />}</>;
};

export default PopularMoviePage;
