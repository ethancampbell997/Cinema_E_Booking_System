import "../styles.css";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const LogIn = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }), // Updated to send email
            });

            if (!response.ok) {
                throw new Error('Login failed: Invalid email or password'); // Updated error message
            }

            const data = await response.json();
            console.log('Login successful:', data);
            setIsLoggedIn(true);
            sessionStorage.setItem('userEmail', email);
            alert("You are logged in")
            navigate('/'); 
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className="wholepage">
            <h1 className="below">Login</h1>
            <span>New User? Sign up </span>
            <Link className="linkk" to="/createaccount">here!</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input
                    type="email" // Updated type to 'email' for better validation
                    id="email" // Updated id
                    placeholder="Your Email" 
                    value={email} // Updated to use email
                    onChange={(e) => setEmail(e.target.value)} // Updated to use setEmail
                    required
                />
                <br />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    id="password"
                    placeholder="Your Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <br />
                <input className="FinishButton" type="submit" value="Log In" />
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </form>
            <button className="sign-in"><Link to="/forgotpassword">Forgot Password</Link></button>
        </div>
    );
}