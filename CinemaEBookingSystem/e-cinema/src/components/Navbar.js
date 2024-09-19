import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">E-Cinema</div>
            <ul className="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/movies">Movies</a></li>
                <li><a href="/promotions">Promotions</a></li>
            </ul>
            <div className="nav-right">
                <input type="text" placeholder="Search" className="search-bar" />
                <button className="sign-in">Sign In</button>
                <button className="sign-up">Sign Up</button>
            </div>
        </nav>
    );
}

export default Navbar;