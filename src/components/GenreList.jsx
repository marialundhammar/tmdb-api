import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

//list of genres where the button that is clicked will have different styling than the rest
const GenreList = ({ data, id }) => (
  <div>
    {data.genres.map((genre) => (
      <Button
        as={Link}
        to={`/genre/${genre.id}`}
        key={genre.id}
        className='m-2 p-3'
        variant={id == genre.id ? 'light' : 'outline-light'}
      >
        {genre.name}
      </Button>
    ))}
  </div>
);

export default GenreList;
