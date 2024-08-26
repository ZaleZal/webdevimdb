import React from 'react';
import './MovieCard.css';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img src={movie.posterUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Rating: {movie.rating}</p>
        <p>Release Year: {movie.year}</p>
      </div>
    </div>
  );
}

export default MovieCard;
