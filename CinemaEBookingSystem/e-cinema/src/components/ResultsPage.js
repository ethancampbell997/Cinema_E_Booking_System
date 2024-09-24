import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./ResultsPage.css";

const ResultsPage = () => {
    const { searchTerm } = useParams(); 
    const [searchResult, setSearchResult] = useState("");


    useEffect(() => {
        const fetchResults = async () => {
            try {
                // Make the API request to your Spring Boot backend via POST
                const response = await fetch("http://localhost:8080/movies/search", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ title: searchTerm })  // Send search term as JSON
                });
    
                if (response.ok) {
                    const result = await response.text(); // Assuming the backend returns plain text
                    setSearchResult(result); // Update the state with the result
                    const resultData = result.replace("Search Result: ", "").split(", ");
                    const [title, status, trailerLink, imageLink] = resultData;
                    console.log("Title:", title);
                    console.log("Status:", status);
                    console.log("Trailer Link:", trailerLink);
                    console.log("Image Link:", imageLink);


                } else {
                    setSearchResult("Error: Movie not found or an error occurred.");
                }
            } catch (error) {
                setSearchResult("Error: " + error.message);
            }
        };

        fetchResults();
    }, [searchTerm]);

    return (
        <div className="body">
            <h1>Search Results for "{searchTerm}"</h1>
            {searchResult && (
                <div className="search-result">
                    <p>{searchResult}</p>
                </div>
            )}
        </div>
    );
};

export default ResultsPage;