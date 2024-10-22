import "../styles.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function EditProf() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    promotion: false,
  });

  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    const userEmail = sessionStorage.getItem("userEmail");

    // Fetch user profile
    fetch("http://localhost:8080/api/users/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        setUserData({
          name: data.name || "",
          street: data.street || "",
          city: data.city || "",
          state: data.state || "",
          zip: data.zip || "",
          promotion: data.promotion || false,
        });
      })
      .catch((error) => console.error("Error fetching user data:", error));

    // Fetch payment cards
    fetch("http://localhost:8080/api/users/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data && data.length) {
          setCardData(
            data.map((card) => ({
              cardType: card.cardType || "",
              cardNumber: card.cardNumber || "",
              expiration: card.expirationDate || "",
              cvc: "", // Initialize CVC as empty (not displayed)
            }))
          );
        }
      })
      .catch((error) => console.error("Error fetching card data:", error));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleCheckboxChange = (e) => {
    setUserData((prevState) => ({ ...prevState, promotion: e.target.checked }));
  };

  const handleCardInputChange = (index, field, value) => {
    setCardData((prevCardData) => {
      const updatedCards = [...prevCardData];
      updatedCards[index][field] = value;
      return updatedCards;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting user data:", userData);
    const userEmail = sessionStorage.getItem("userEmail");
    fetch("http://localhost:8080/api/users/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: userData.name,
        street: userData.street,
        city: userData.city,
        state: userData.state,
        zip: userData.zip,
        promotion: userData.promotion,
        email: userEmail,
        cards: cardData, // Include the card data in the submission
      }),
    })
      .then((response) => {
        console.log("Response status:", response.status);
        navigate("/");
        return response.text(); // Get the response as text
      })
      .then((text) => {
        try {
          const data = JSON.parse(text); // Try to parse the text as JSON
          console.log("Success:", data);
        } catch (error) {
          console.error("Failed to parse JSON:", text); // Log the response text
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <div className="wholepage">
        <h1 className="below">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={userData.name}
            onChange={handleInputChange}
          />
          <br />

          <h4>Payment Info</h4>
          <div className="allCards">
            {cardData.map((card, index) => (
              <div key={index} className={`card${index + 1}`}>
                <p>Card {index + 1}</p>
                <label>Card Type: </label>
                <select
                  id="payment"
                  value={card.cardType}
                  onChange={(e) =>
                    handleCardInputChange(index, "cardType", e.target.value)
                  }
                >
                  <option value="" disabled>
                    Select Card Type
                  </option>
                  <option value="Visa">Visa</option>
                  <option value="MasterCard">MasterCard</option>
                  <option value="Discover">Discover</option>
                  <option value="American Express">American Express</option>
                </select>
                <br />

                <label>Card Number: </label>
                <input
                  type="text"
                  value={card.cardNumber}
                  onChange={(e) =>
                    handleCardInputChange(index, "cardNumber", e.target.value)
                  }
                />
                <br />

                <label>Expiration Date: </label>
                <input
                  type="text"
                  value={card.expiration}
                  onChange={(e) =>
                    handleCardInputChange(index, "expiration", e.target.value)
                  }
                  placeholder="12/2024"
                />
                <br />

                <label>CVC: </label>
                <input
                  type="text"
                  value={card.cvc}
                  onChange={(e) =>
                    handleCardInputChange(index, "cvc", e.target.value)
                  }
                />
                <br />
              </div>
            ))}
          </div>

          <h4>Address</h4>
          <label htmlFor="street">Street: </label>
          <input
            type="text"
            id="street"
            value={userData.street}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="city">City: </label>
          <input
            type="text"
            id="city"
            value={userData.city}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="state">State: </label>
          <input
            type="text"
            id="state"
            value={userData.state}
            onChange={handleInputChange}
          />
          <br />
          <label htmlFor="zip">Zip Code: </label>
          <input
            type="text"
            id="zip"
            value={userData.zip}
            onChange={handleInputChange}
          />
          <br />
          <br />

          <label htmlFor="promotion">Register for Promotions</label>
          <input
            type="checkbox"
            id="promotion"
            checked={userData.promotion}
            onChange={handleCheckboxChange}
          />
          <br />

          <input className="FinishButton" type="submit" value="Submit" />
        </form>
        <button className="sign-in">
          <Link to="/changepassword">Change Password</Link>
        </button>
      </div>
    </>
  );
}
