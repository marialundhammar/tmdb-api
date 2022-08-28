import React from 'react';
import Button from 'react-bootstrap/Button';

const GenreList = ({ data }) => (
  <>
    {data.genres.map((genre) => (
      <Button key={genre.id} href={`/genre/${genre.id}`} className='m-2 genres'>
        {genre.name}
      </Button>
    ))}
  </>
);

export default GenreList;
