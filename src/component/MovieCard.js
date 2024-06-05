// MovieCard.js
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link className="movie-card" to={`/description/${movie.id}`}>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>Rating: {movie.rating}</p>
      <p>Description: {movie.description}</p>
    </Link>
  );
};

export default MovieCard;
