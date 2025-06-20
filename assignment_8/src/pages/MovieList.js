import { Link } from 'react-router-dom';
import movies from '../data/movies';
import './MovieList.css';

export default function MovieLsist() {
  return (
    <div className="grid">
      {movies.map(movie => (
        <Link key={movie.id} to={`/movie/${movie.id}`} className="card">
          <img src={movie.image} alt={movie.title} />
          <h4>{movie.title}</h4>
        </Link>
      ))}
    </div>
  );
}
