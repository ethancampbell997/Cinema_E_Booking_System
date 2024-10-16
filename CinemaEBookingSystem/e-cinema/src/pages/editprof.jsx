import "../styles.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";

export function EditProf() {
  const [userData, setUserData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    promotion: false,
    cards: []
  });

  useEffect(() => {
    fetch('http://localhost:8080/api/user/profile')
      .then(response => response.json())
      .then(data => {
        setUserData({
          name: data.name || '',
          street: data.address.street || '',
          city: data.address.city || '',
          state: data.address.state || '',
          zip: data.address.zip || '',
          promotion: data.promotion || false,
          cards: data.cards || []
        });
      })
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setUserData(prevState => ({ ...prevState, [id]: value }));
  };

  const handleCheckboxChange = (e) => {
    setUserData(prevState => ({ ...prevState, promotion: e.target.checked }));
  };

  const handleCardChange = (index, field, value) => {
    const newCards = [...userData.cards];
    newCards[index][field] = value;
    setUserData(prevState => ({ ...prevState, cards: newCards }));
  };

  const addCard = () => {
    if (userData.cards.length < 4) {
      setUserData(prevState => ({
        ...prevState,
        cards: [...prevState.cards, { cardType: "", cardNumber: "", expiration: "", cvc: "" }]
      }));
    }
  };

  const deleteCard = (index) => {
    const newCards = [...userData.cards];
    newCards.splice(index, 1);
    setUserData(prevState => ({ ...prevState, cards: newCards }));
  };

  return (
    <>
      <Navbar />
      <div className="wholepage">
        <h1 className="below">Edit Profile</h1>
        <form method="POST">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={userData.name} onChange={handleInputChange} /><br />

          <h4>Payment Info</h4>
          {userData.cards.map((card, index) => (
            <div key={index} className="card-info">
              <label htmlFor={`payment-${index}`}>Card Type: </label>
              <select
                id={`payment-${index}`}
                value={card.cardType}
                onChange={(e) => handleCardChange(index, 'cardType', e.target.value)}
              >
                <option value="" disabled>Select Card Type</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Discover">Discover</option>
                <option value="American Express">American Express</option>
              </select><br />

              <label htmlFor={`cardNumber-${index}`}>Card Number: </label>
              <input
                type="text"
                id={`cardNumber-${index}`}
                value={card.cardNumber}
                onChange={(e) => handleCardChange(index, 'cardNumber', e.target.value)}
              /><br />

              <label htmlFor={`expiration-${index}`}>Expiration Date: </label>
              <input
                type="text"
                id={`expiration-${index}`}
                value={card.expiration}
                onChange={(e) => handleCardChange(index, 'expiration', e.target.value)}
              /><br />

              <label htmlFor={`cvc-${index}`}>CVC: </label>
              <input
                type="text"
                id={`cvc-${index}`}
                value={card.cvc}
                onChange={(e) => handleCardChange(index, 'cvc', e.target.value)}
              /><br /><br />

              <button type="button" onClick={() => deleteCard(index)}>Delete Card</button>
              <br /><br />
            </div>
          ))}
          {userData.cards.length < 4 && (
            <button type="button" onClick={addCard}>Add Card</button>
          )}
          <br /><br />

          <h4>Address</h4>
          <label htmlFor="street">Street: </label>
          <input type="text" id="street" value={userData.street} onChange={handleInputChange} /><br />
          <label htmlFor="city">City: </label>
          <input type="text" id="city" value={userData.city} onChange={handleInputChange} /><br />
          <label htmlFor="state">State: </label>
          <input type="text" id="state" value={userData.state} onChange={handleInputChange} /><br />
          <label htmlFor="zip">Zip Code: </label>
          <input type="text" id="zip" value={userData.zip} onChange={handleInputChange} /><br /><br />

          <label htmlFor="promotion">Register for Promotions</label>
          <input type="checkbox" id="promotion" checked={userData.promotion} onChange={handleCheckboxChange} /><br />

          <input className="FinishButton" type="submit" value="Submit" />
        </form>
        <button className="sign-in">
          <Link to="/changepassword">Change Password</Link>
        </button>
      </div>
    </>
  );
}
