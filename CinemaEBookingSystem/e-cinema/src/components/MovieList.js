import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ title, movies = [] }) => {
  const handleWatchTrailer = (trailerUrl) => {
    window.open(trailerUrl, '_blank');
  };

  return (
    <section className="movie-list">
      <h2>{title}</h2>
      <div className="movie-cards">
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
              <div className="poster-container">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <div className="highlight-overlay"></div>
              </div>
            </Link>

            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <h4>{movie.title}</h4>
            </Link>

            {title === "Now Playing" && (
              <div className="movie-info">
                <p>{movie.rating}</p>
                <button className="watch-trailer" onClick={() => handleWatchTrailer(movie.trailer)}>
                  Watch Trailer
                </button>
              </div>
            )}
            {title === "Coming Soon" && (
              <div className="coming-soon">
                <button className="watch-trailer" onClick={() => handleWatchTrailer(movie.trailer)}>
                  Watch Trailer
                </button>
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;