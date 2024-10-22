import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import { Link } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const { title } = useParams();
  const heroRef = useRef(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const movie = movies.find((movie) => 
    movie.title.toLowerCase().replace(/\s+/g, '-') === title
  );

  const handleWatchTrailer = () => {
    setShowTrailer(true);
  };

  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.style.background = `url(${movie?.banner}) center center / cover no-repeat`;
    }
  }, [movie]);

  return (
    <div>
      {movie ? (
        <div className="movie-detail">
          <section ref={heroRef} className="hero-section-movie">
            <div className="hero-content">
              <h1>{movie.title}</h1>
              <div className="buttons">
                <button><Link to="/book">Get Tickets</Link></button>
                <button className="watch-trailer" onClick={handleWatchTrailer}>
                  Watch Trailer
                </button>
              </div>
            </div>
          </section>
          <p>Rating: {movie.rating}</p>
          <p>{movie.description}</p>

          {showTrailer && (
            <div className="trailer-container">
              <iframe
                width="560"
                height="315"
                src={movie.trailerLink} 
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetail;