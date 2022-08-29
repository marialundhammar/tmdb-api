import React from 'react';
import { Link } from 'react-router-dom';

const GenreList = ({ data }) => (
  <>
    {data.genres.map((genre) => (
      <Link to={`/genre/${genre.id}`} key={genre.id} className='genre' role='Button'>
        {genre.name}
      </Link>
    ))}
  </>
);

export default GenreList;
