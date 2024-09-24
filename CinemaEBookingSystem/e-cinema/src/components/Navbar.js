import React, { useState } from "react";
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResult, setSearchResult] = useState("");

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
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
                } else {
                    setSearchResult("Error: Movie not found or an error occurred.");
                }
            } catch (error) {
                setSearchResult("Error: " + error.message);
            }
        }
    };
    

    return (
        <nav className="navbar">
            <div className="logo">
                <a href="/">E-Cinema</a>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/" className={currentPath === '/' ? 'active' : ''}>Home</a>
                </li>
                <li>
                    <a href="/movies" className={currentPath === '/movies' ? 'active' : ''}>Movies</a>
                </li>
                <li>
                    <a href="/promotions" className={currentPath === '/promotions' ? 'active' : ''}>Promotions</a>
                </li>
            </ul>
            <div className="nav-right">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-bar"
                    value={searchTerm}
                    onChange={handleSearchInput}
                    onKeyDown={handleKeyDown}
                />
                <button className="sign-in"><Link to="/login">Sign In</Link></button>
                <button className="sign-up"><Link to="/createaccount">Sign Up</Link></button>
            </div>
            {searchResult && (
                <div className="search-result">
                    <p>Search Result: {searchResult}</p>
                </div>
            )}
        </nav>
    );
};

export default Navbar;