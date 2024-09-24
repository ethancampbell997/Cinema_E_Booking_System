import { useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import { Link } from "react-router-dom";

import Deadpool from '../images/banners/Deadpool-Wolverine.png';
import Transformers from '../images/banners/Transformers.png';
import Beetlejuice from '../images/banners/Beetlejuice.png';
import Speak from '../images/banners/Speak.png';
import Twisters from '../images/banners/Twisters.png';

const MovieDetail = ({ movies }) => {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === id);
  const heroRef = useRef(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const handleWatchTrailer = () => {
    setShowTrailer(true);
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
          <>
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

            {id === "deadpool-and-wolverine" && <p>Third movie of the Deadpool franchise.</p>}
            {id === "transformers-one" && <p>Transformers.</p>}
            {id === "beetlejuice-beetlejuice" && <p>Beetlejuice.</p>}
            {id === "speak-no-evil" && <p>Speak no evil.</p>}
            {id === "twisters" && <p>Twisters.</p>}

            {showTrailer && (
              <div className="trailer-container">
                <iframe
                  width="560"
                  height="315"
                  src={movie.trailer}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
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
