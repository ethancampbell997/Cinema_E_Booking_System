import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./ResultsPage.css";
import "./MovieList.css";

const ResultsPage = () => {
    const { searchTerm } = useParams(); 
    const [searchResult, setSearchResult] = useState(null);
    const [loading, setLoading] = useState(true);

    const generateIdFromTitle = (title) => {
        return title.toLowerCase().replace(/\s+/g, '-'); 
    };

    const capitalizeFirstLetters = (str) => {
        return str
            .split(' ') 
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
            .join(' '); 
    };

    useEffect(() => {
        const fetchResults = async () => {
            setLoading(true); // Start loading
            try {
                const response = await fetch("http://localhost:8080/movies/search", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title: searchTerm })
                });
    
                if (response.ok) {
                    const result = await response.text();
                    const resultData = result.replace("Search Result: ", "").split(", ");
                    
                    if (resultData.length < 4) {
                        setSearchResult([]);
                    } else {
                        const [title, status, trailerLink, imageLink] = resultData;
                        setSearchResult([{
                            id: generateIdFromTitle(title), 
                            title: capitalizeFirstLetters(title),
                            status,
                            trailer: trailerLink,
                            poster: imageLink,
                        }]);
                    }
                } else {
                    setSearchResult([]); 
                }
            } catch (error) {
                setSearchResult([]); 
            } finally {
                setLoading(false);
            }
        };
    
        fetchResults();
    }, [searchTerm]);

    return (
        <div className="body">
            <h1>Search Results for "{searchTerm}"</h1>
            <section className="movie-list">
                <div className="movie-cards">
                    {loading ? (
                        <p>Loading...</p> // Show loading message while fetching
                    ) : searchResult.length > 0 ? (
                        searchResult.map((movie, index) => (
                            <div className="movie-card" key={index}>
                                <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
                                    <div className="poster-container">
                                        <img src={movie.poster} alt={movie.title || "Unknown Title"} className="movie-poster" />
                                        <div className="highlight-overlay"></div>
                                    </div>
                                    <h4>{movie.title || "Unknown Title"}</h4>
                                </Link>
                                <p>Status: {movie.status || "Unknown Status"}</p>
                                <a href={movie.trailer} target="_blank" rel="noopener noreferrer">
                                    <button className="watch-trailer">Watch Trailer</button>
                                </a>
                            </div>
                        ))
                    ) : (
                        <p>No results found.</p> // Show this after loading is complete
                    )}
                </div>
            </section>
        </div>
    );
};

export default ResultsPage;