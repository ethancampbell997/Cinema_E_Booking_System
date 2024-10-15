import React, { useState } from "react";
import "../styles.css";
import Navbar from "../components/Navbar";

export function ChangePassword() {
  return (
    <>
      <Navbar />
      <div className="wholepage">
        <h1 className="below">Change Password</h1>
        <form>
          <label for="password">Enter your old password: </label>
          <input type="password" id="password" placeholder="Your Password" required></input><br></br>
        </form>
      </div>
    </>
    );
}
