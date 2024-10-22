import "../styles.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function EditProf() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    promotion: false,
    paymentCards: [
      { type: '', number: '', expiration: '', cvc: '' },
      { type: '', number: '', expiration: '', cvc: '' },
      { type: '', number: '', expiration: '', cvc: '' },
      { type: '', number: '', expiration: '', cvc: '' },
    ]
  });

  useEffect(() => {
    const userEmail = sessionStorage.getItem('userEmail');

    fetch('http://localhost:8080/api/users/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: userEmail }),
    })
      .then(response => response.json())
      .then(data => {
        setUserData(prevState => ({
          ...prevState,
          name: data.name || '',
          street: data.street || '',
          city: data.city || '',
          state: data.state || '',
          zip: data.zip || '',
          promotion: data.promotion || false,
          paymentCards: data.paymentCards || [
            { type: '', number: '', expiration: '', cvc: '' },
            { type: '', number: '', expiration: '', cvc: '' },
            { type: '', number: '', expiration: '', cvc: '' },
            { type: '', number: '', expiration: '', cvc: '' },
          ]
        }));
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

  const handleCardChange = (index, e) => {
    const { id, value } = e.target;
    const newCards = [...userData.paymentCards];
    newCards[index] = { ...newCards[index], [id]: value };
    setUserData(prevState => ({ ...prevState, paymentCards: newCards }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting user data:', userData);
    const userEmail = sessionStorage.getItem('userEmail');
    fetch('http://localhost:8080/api/users/edit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...userData,
        email: userEmail
      }),
    })
      .then(response => {
        console.log('Response status:', response.status);
        navigate('/');
        return response.text();
      })
      .then(text => {
        try {
          const data = JSON.parse(text);
          console.log('Success:', data);
        } catch (error) {
          console.error('Failed to parse JSON:', text);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <div className="wholepage">
        <h1 className="below">Edit Profile</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={userData.name} onChange={handleInputChange} /><br />

          <h4>Payment Info</h4>
          {userData.paymentCards.map((card, index) => (
            <div key={index}>
              <p>Card {index + 1}</p>
              <label htmlFor={`payment-${index}`}>Card Type: </label>
              <select id={`payment-${index}`} value={card.type} onChange={(e) => handleCardChange(index, e)}>
                <option value="" disabled hidden>Select Card Type</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Discover">Discover</option>
                <option value="American Express">American Express</option>
              </select><br />

              <label htmlFor={`cardNumber-${index}`}>Card Number: </label>
              <input type="text" id={`cardNumber-${index}`} value={card.number} onChange={(e) => handleCardChange(index, e)} placeholder="Card number" /><br />

              <label htmlFor={`expiration-${index}`}>Expiration Date: </label>
              <input type="text" id={`expiration-${index}`} value={card.expiration} onChange={(e) => handleCardChange(index, e)} placeholder="12/2024" pattern="[0-1][0-9]/[0-9]{4}" /><br />

              <label htmlFor={`cvc-${index}`}>CVC: </label>
              <input type="text" id={`cvc-${index}`} value={card.cvc} onChange={(e) => handleCardChange(index, e)} placeholder="123" /><br />
            </div>
          ))}

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