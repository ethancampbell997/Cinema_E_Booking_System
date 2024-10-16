import React, { useState } from "react";
import "../styles.css";
import Navbar from "../components/Navbar";

export function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState("");

  // Function to handle the old password verification
  const verifyPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/verify-password', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: oldPassword }),
      });
      const result = await response.json();

      if (response.ok && result.isVerified) {
        setIsVerified(true);
        setError(""); // Clear any previous error
      } else {
        setError("Incorrect password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  // Function to handle the new password submission
  const changePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/change-password', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ newPassword }),
      });
      const result = await response.json();

      if (response.ok && result.success) {
        alert("Password changed successfully!");
        // You might want to redirect the user or clear the form here
      } else {
        setError("Failed to change the password. Please try again.");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <Navbar />
      <div className="wholepage">
        <h1 className="below">Change Password</h1>
        <form onSubmit={isVerified ? changePassword : verifyPassword}>
          {!isVerified ? (
            <>
              <label htmlFor="oldPassword">Enter your old password:</label>
              <input
                type="password"
                id="oldPassword"
                placeholder="Your Old Password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit">Verify</button>
            </>
          ) : (
            <>
              <label htmlFor="newPassword">Enter your new password:</label>
              <input
                type="password"
                id="newPassword"
                placeholder="Your New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
              <br />
              <button type="submit">Change Password</button>
            </>
          )}
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}
