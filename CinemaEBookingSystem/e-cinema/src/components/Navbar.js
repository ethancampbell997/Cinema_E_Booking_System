import React, { useState, useRef, useEffect } from "react";
import './Navbar.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

import Avatar from '../images/avatar-15.png';

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname;
    const [searchTerm, setSearchTerm] = useState("");

    const [isLoggedIn, setIsLoggedIn] = useState(true); // Toggle logged in state here
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
    const avatarRef = useRef(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleSearchInput = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = async (event) => {
        if (event.key === "Enter") {
            navigate(`/results/${encodeURIComponent(searchTerm)}`);
        }
    };
    
    const handleLogout = () => {
        setIsLoggedIn(false);
        setDropdownVisible(false); 
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) && !avatarRef.current.contains(event.target)) {
                
                setDropdownVisible(false);
            }
        };

        if (dropdownVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dropdownVisible]);

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
                {isLoggedIn ? (
                    <div className="avatar-container" ref={avatarRef} onClick={toggleDropdown}>
                        <div className="avatar">
                            <img src={Avatar} alt="User Avatar" className="avatar-img" />
                        </div>
                        {dropdownVisible && (
                            <div className="dropdown-menu" ref={dropdownRef}>
                                <Link to="/profile" className="dropdown-item">Profile</Link>
                                <button className="logout" onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <>
                        <button className="sign-in"><Link to="/login">Sign In</Link></button>
                        <button className="sign-up"><Link to="/createaccount">Sign Up</Link></button>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;