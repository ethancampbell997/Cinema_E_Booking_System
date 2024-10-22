import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const MovieList = ({ title, movies = [], loading }) => {
  const [selectedTrailer, setSelectedTrailer] = useState(null);

  const handleWatchTrailer = (trailerUrl) => {
    if (trailerUrl) {
      setSelectedTrailer(trailerUrl);
    } else {
      console.warn("Trailer URL is not available.");
    }
  };
  console.log(movies);

  const closeTrailer = () => {
    setSelectedTrailer(null);
  };

  const generateIdFromTitle = (title) => {
    return title.toLowerCase().replace(/\s+/g, '-'); 
  };

  return (
    <section className="movie-list">
      <h2>{title}</h2>
      <div className="movie-cards">
        {loading ? (
          <p>Loading...</p> 
        ) : movies.length > 0 ? (
          movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <Link to={`/movie/${generateIdFromTitle(movie.title)}`} style={{ textDecoration: 'none' }}>
                <div className="poster-title">
                  <div className="poster-container">
                    <img
                      src={movie.trailerPic || '/default-poster.jpg'} 
                      alt={movie.title || "Unknown Title"}
                      className="movie-poster"
                    />
                    <div className="highlight-overlay"></div>
                  </div>
                  <h4>{movie.title || "Unknown Title"}</h4>
                </div>
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
                <div className="movie-info">
                  <p>{movie.rating}</p>
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
      {selectedTrailer && (
        <div className="trailer-container">
          <button className="close-trailer" onClick={closeTrailer}>Close</button>
          <iframe
            width="560"
            height="315"
            src={selectedTrailer}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </section>
  );
};

export default MovieList;