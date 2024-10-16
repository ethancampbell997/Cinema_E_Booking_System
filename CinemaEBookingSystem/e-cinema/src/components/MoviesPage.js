import React, { useState, useEffect, useRef } from 'react';
import MovieList from './MovieList';
import "./MoviesPage.css";

const MoviesPage = ({ moviesNowPlaying }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [showRatingDropdown, setShowRatingDropdown] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);
  const filterButtonRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    if (!dropdownVisible) {
      setShowRatingDropdown(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        filterButtonRef.current && !filterButtonRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
        setSelectedRatings([]);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownVisible]);

  const handleRatingChange = (e) => {
    const rating = e.target.value;
    setSelectedRatings(prevSelected => 
      prevSelected.includes(rating) 
        ? prevSelected.filter(r => r !== rating) 
        : [...prevSelected, rating]
    );
  };

  const filteredMovies = moviesNowPlaying.filter(movie => {
    const matchesSearchTerm = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRating = selectedRatings.length > 0 ? selectedRatings.includes(movie.rating) : true; 
    return matchesSearchTerm && matchesRating;
  });

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

        <button ref={filterButtonRef} onClick={toggleDropdown} className="filter-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <line x1="0" y1="12" x2="24" y2="12" />
            <line x1="0" y1="4" x2="24" y2="4" />
            <line x1="0" y1="20" x2="24" y2="20" />
          </svg>
        </button>

        {dropdownVisible && (
            <div className="filter-box" ref={dropdownRef}>
              <h4>Filters</h4>
              <div className="filter-group" onClick={() => setShowRatingDropdown(prev => !prev)}>
                <label className="dropdown-label">
                  Rating
                </label>
                <span className={`arrow ${showRatingDropdown ? 'open' : ''}`}></span>
              </div>
              {showRatingDropdown && (
                <div className="dropdown-content">
                  <label>
                    <input
                      type="checkbox"
                      value="G"
                      checked={selectedRatings.includes("G")}
                      onChange={handleRatingChange}
                    />
                    G
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="PG"
                      checked={selectedRatings.includes("PG")}
                      onChange={handleRatingChange}
                    />
                    PG
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="PG-13"
                      checked={selectedRatings.includes("PG-13")}
                      onChange={handleRatingChange}
                    />
                    PG-13
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      value="R"
                      checked={selectedRatings.includes("R")}
                      onChange={handleRatingChange}
                    />
                    R
                  </label>
                </div>
              )}

            <button onClick={() => setSelectedRatings([])} className="clear-filters">
              Clear Filters
            </button>
          </div>
        )}
      </div>

      <MovieList title="Now Playing" movies={filteredMovies} />
    </div>
  );
};

export default MoviesPage;