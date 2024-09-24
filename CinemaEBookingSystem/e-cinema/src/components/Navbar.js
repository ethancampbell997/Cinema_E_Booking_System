import React, { useState } from "react";
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            // Navigate to the results page with the search term
            navigate(`/results/${encodeURIComponent(searchTerm)}`);
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
        </nav>
    );
};

export default Navbar;