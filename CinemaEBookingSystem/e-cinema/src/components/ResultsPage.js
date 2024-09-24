import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ResultsPage.css";

const ResultsPage = () => {
    const { searchTerm } = useParams(); // Get the search term from the URL
    const [results, setResults] = useState([]);

    useEffect(() => {
        const fetchResults = async () => {
            try {
                const response = await fetch("http://localhost:8080/movies/search", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title: searchTerm }),
                });

                if (response.ok) {
                    const data = await response.json(); // Assuming the backend returns JSON
                    setResults(data); // Assuming the API returns an array of results
                } else {
                    setResults([{ title: "Error: Movie not found or an error occurred." }]);
                }
            } catch (error) {
                setResults([{ title: "Error: " + error.message }]);
            }
        };

        fetchResults();
    }, [searchTerm]);

    return (
        <div className="body">
            <h1>Search Results for "{searchTerm}"</h1>
            <ul>
                {results.map((result, index) => (
                    <li key={index}>{result.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default ResultsPage;