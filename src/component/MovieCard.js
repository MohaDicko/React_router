import React from 'react'

const MovieCard = ({ movie }) => {
    return (
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <img src={movie.posterURL} alt={movie.title} />
        <p>Rating: {movie.rating}</p>
        <p>Description: {movie.description}</p>
      </div>
    );
  }

export default MovieCard
