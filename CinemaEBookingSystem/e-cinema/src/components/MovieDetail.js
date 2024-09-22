import { useParams } from 'react-router-dom';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);

  return (
    <div>
      {movie ? (
        <div className="movie-detail">
          <img src={movie.poster} alt={movie.title} />
          <h1>{movie.title}</h1>
          {id === "deadpool-and-wolverine" && (
            <div>
              <p>Third movie of the Deadpool franchise.</p>
            </div>
          )}
          <p>{movie.description}</p>
          <p>Rating: {movie.rating}</p>
          <button>Watch Trailer</button>
          <button>Get Tickets</button>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetail;