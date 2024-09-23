import React from "react";
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom"
const Navbar = () => {
    const location = useLocation();
    const currentPath = location.pathname;

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
                <input type="text" placeholder="Search" className="search-bar" />
                <button className="sign-in"><Link className="linkk"to="/login">Sign In</Link></button>
                <button className="sign-up"><Link className="linkk "to="/createaccount">Sign Up</Link></button>
            </div>
        </nav>
    );
}

export default Navbar;