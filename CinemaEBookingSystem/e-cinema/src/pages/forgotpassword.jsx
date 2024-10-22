import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";
import Navbar from "../components/Navbar";

export function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/users/send-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email }),
            });
            if (response.ok) {
                setStep(2);
                setMessage("Check your email for a verification code.");
            } else {
                throw new Error("Failed to send verification code.");
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handleCodeSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:8080/api/users/verify-code", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, code }),
            });
            if (response.ok) {
                setStep(3);
                setMessage("Enter your new password.");
            } else {
                throw new Error("Invalid verification code.");
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch("http://localhost:8080/api/users/reset-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, newPassword }),
            });
            if (response.ok) {
                setMessage("Your password has been reset! Redirecting to home page...");

                setTimeout(() => {
                    navigate('/'); // Change "/home" to your actual home route
                }, 3000);
            } else {
                throw new Error("Failed to reset password.");
            }
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <>
            <Navbar />
            <div className="wholepage">
                <h1 className="below">Forgot Password</h1>
                {message && <p>{message}</p>}
                {step === 1 && (
                    <form onSubmit={handleEmailSubmit}>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="youremail@gmail.com"
                            required
                        />
                        <br />
                        <input className="FinishButton" type="submit" value="Send Code" />
                    </form>
                )}
                {step === 2 && (
                    <form onSubmit={handleCodeSubmit}>
                        <label htmlFor="code">Verification Code: </label>
                        <input
                            type="text"
                            id="code"
                            value={code}
                            onChange={(e) => setCode(e.target.value)}
                            required
                        />
                        <br />
                        <input className="FinishButton" type="submit" value="Verify Code" />
                    </form>
                )}
                {step === 3 && (
                    <form onSubmit={handlePasswordSubmit}>
                        <label htmlFor="newPassword">New Password: </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <br />
                        <input 
                            className="FinishButton" 
                            type="submit" 
                            value="Reset Password"
                            disabled={isSubmitting} 
                        />
                    </form>
                )}
            </div>
        </>
    );
}
