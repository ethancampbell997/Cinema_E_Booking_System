import React from 'react';
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
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.rating} ⭐</p>
            <button className="watch-trailer" onClick={() => handleWatchTrailer(movie.trailer)}>
              Watch Trailer
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MovieList;