import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ title, movies = [], loading }) => {
  const handleWatchTrailer = (trailerUrl) => {
    if (trailerUrl) {
      window.open(trailerUrl, '_blank');
    } else {
      console.warn("Trailer URL is not available.");
    }
  };
  console.log(movies);

  return (
    <section className="movie-list">
      <h2>{title}</h2>
      <div className="movie-cards">
        {loading ? (
          <p>Loading...</p> 
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                <div className="poster-container">
                  <img
                    src={movie.trailerPic || '/default-poster.jpg'} 
                    alt={movie.title || "Unknown Title"}
                    className="movie-poster"
                  />
                  <div className="highlight-overlay"></div>
                </div>
                <h4>{movie.title || "Unknown Title"}</h4>
              </Link>
              {title === "Now Playing" && (
                <div className="movie-info">
                  <p>{movie.rating}</p>
                  <button className="watch-trailer" onClick={() => handleWatchTrailer(movie.trailerLink)}>
                    Watch Trailer
                  </button>
                </div>
              )}
              {title === "Coming Soon" && (
                <div className="coming-soon">
                  <button className="watch-trailer" onClick={() => handleWatchTrailer(movie.trailerLink)}>
                    Watch Trailer
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No movies available.</p>
        )}
      </div>
    </section>
  );
};

export default MovieList;