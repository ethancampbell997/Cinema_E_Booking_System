import React, { useState } from "react";
import "../styles.css";
import { useNavigate } from "react-router-dom";

export function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const userEmail = sessionStorage.getItem('userEmail');
  const navigate = useNavigate();

  const changePassword = async (e) => {
    
    e.preventDefault();
    const userEmail = sessionStorage.getItem('userEmail');
    try {
        const response = await fetch('http://localhost:8080/api/users/changePassword', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ "email": userEmail, "oldPassword": oldPassword, "newPassword": newPassword }),
        });
        
        const result = await response.json();
        
        if (response.ok) {
            alert(result.message);
            navigate('/'); 
        } else {
            setError(result.message || "Failed to change password.");
        }
    } catch (error) {
        setError("An error occurred. Please try again.");
    }
};

  return (
    <div className="wholepage">
      <h1 className="below">Change Password</h1>
      <form onSubmit={changePassword}>
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
        <label htmlFor="newPassword">Enter your new password:</label>
        <input
          type="password"
          id="newPassword"
          placeholder="Your New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
          minLength="8"
        />
        <br />
        <button className="FinishButton" type="submit">Submit</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
