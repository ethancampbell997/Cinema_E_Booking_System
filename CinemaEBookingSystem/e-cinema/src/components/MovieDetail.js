import { useParams } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import './HeroSection.css';

import Deadpool from '../images/banners/Deadpool-Wolverine.png';
import Transformers from '../images/banners/Transformers.png';
import Beetlejuice from '../images/banners/Beetlejuice.png';
import Speak from '../images/banners/Speak.png';
import Twisters from '../images/banners/Twisters.png';


const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);
  const heroRef = useRef(null);

  const handleWatchTrailer = (trailerUrl) => {
    window.open(trailerUrl, '_blank');
  };

  useEffect(() => {
    if (heroRef.current && id === "deadpool-and-wolverine") {
      heroRef.current.style.background = `url(${Deadpool}) center center / cover no-repeat`;
    } 
    else if (heroRef.current && id === "transformers-one") {
      heroRef.current.style.background = `url(${Transformers}) center center / cover no-repeat`;
    }
    else if (heroRef.current && id === "beetlejuice-beetlejuice") {
      heroRef.current.style.background = `url(${Beetlejuice}) center center / cover no-repeat`;
    }
    else if (heroRef.current && id === "speak-no-evil") {
      heroRef.current.style.background = `url(${Speak}) center center / cover no-repeat`;
    }
    else if (heroRef.current && id === "twisters") {
      heroRef.current.style.background = `url(${Twisters}) center center / cover no-repeat`;
    }
  });

  return (
    <div>
      {movie ? (
        <div className="movie-detail">
          <><section ref={heroRef} className="hero-section-movie">
            <div className="hero-content">
              <h1>{movie.title}</h1>
              <div className="buttons">
                <button>Get Tickets</button>
                <button className="watch-trailer" onClick={() => handleWatchTrailer(movie.trailer)}>
                  Watch Trailer
                </button>
              </div>
            </div>
            </section>
            <p>Rating: {movie.rating}</p>
            {id === "deadpool-and-wolverine" && (
              <div>
                <p>Third movie of the Deadpool franchise.</p>
              </div>
            )}
            {id === "transformers-one" && (
              <div>
                <p>Transformers.</p>
              </div>
            )}
            {id === "beetlejuice-beetlejuice" && (
              <div>
                <p>Beetlejuice.</p>
              </div>
            )}
            {id === "speak-no-evil" && (
              <div>
                <p>Speak no evil.</p>
              </div>
            )}
            {id === "twisters" && (
              <div>
                <p>Twisters.</p>
              </div>
            )}
          </>
        </div>
      ) : (
        <p>Movie not found</p>
      )}
    </div>
  );
};

export default MovieDetail;