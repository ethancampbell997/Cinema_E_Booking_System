import React, { useState } from 'react';
import MovieList from './MovieList';
import "./MoviesPage.css";

const MoviesPage = ({ moviesNowPlaying }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMovies = moviesNowPlaying.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="movies-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>

      <MovieList title="Now Playing" movies={filteredMovies} />
    </div>
  );
};

export default MoviesPage;