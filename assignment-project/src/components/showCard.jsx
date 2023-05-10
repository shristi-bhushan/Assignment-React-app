import React from 'react';
import { Link } from 'react-router-dom';

const ShowCard = ({ show }) => {
  return (
    <div key={show.show.id} className="show-card">
      <img src="./movie_image.jpg" alt="Show Image" />
      <h2>{show.show.name}</h2>
      <h5>Rating: {show.show.rating.average ? show.show.rating.average : 'N/A'}, Language: {show.show.language}</h5>
      <div style={{marginBottom:"2rem"}}>Genres: {show.show.genres.join(', ')}</div>
      <Link to={`/details/${show.show.id}`} style={{marginBottom:"2rem"}}>View Details</Link>
    </div>
  );
};

export default ShowCard;
