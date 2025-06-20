import { useParams, Link } from 'react-router-dom';
import movies from '../data/movies';

export default function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div style={{ padding: 20 }}>
      <h2>{movie.title}</h2>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`}>
        <button>Book Seat</button>
      </Link>
    </div>
  );
}
