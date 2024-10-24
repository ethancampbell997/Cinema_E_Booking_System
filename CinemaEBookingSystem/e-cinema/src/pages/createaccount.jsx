import "../styles.css"
import { Link, useNavigate } from "react-router-dom"
import React, { useState } from 'react';
export function CreateAccount() {
    const [formData, setFormData] =useState({
      name: '',
      email: '',
      password: '',
      phone: '',
      cardType: '',
      cardNumber: '',
      expiration: '',
      cvc: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      promotion: false
    });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e)=> {
      const {id, type, checked, value} = e.target;
      setFormData({
        ...formData, 
        [id]: type === 'checkbox' ? checked : value
      });
      console.log(`Updated ${id}: ${type === 'checkbox' ? checked : value}`);
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);

      try {
        const response = await fetch('http://localhost:8080/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          console.log('Account created')
          navigate('/regcon');
        } else {
          console.error('Error:', response.statusText);
          setLoading(false);
        }
      } catch (error) {
        console.error('Request failed:', error);
        setLoading(false);
      }
    };
    return <>
    
    <div className="wholepage">
    <h1 className="below">Create Account</h1>
    <span>Already have an account? Log in </span>
    <Link className="linkk "to="/login">here</Link>
    <form onSubmit={handleSubmit}>
    <label for="name"><span className="reqqq">* </span>Name: </label>
    <input type="text" id="name" placeholder="John Doe" required onChange={handleChange}></input><br></br>

    <label for="email"><span className="reqqq">* </span>Email: </label>
    <input type="email" id="email" placeholder="youremail@gmail.com" required onChange={handleChange}></input><br></br>

    <label for="password"><span className="reqqq">* </span>Password: </label>
    <input type="password" id="password" placeholder="Your Password" required onChange={handleChange} minLength="8"></input><br></br>

    <label for="phone"><span className="reqqq">* </span>Phone Number: </label>
    <input onChange={handleChange} type="tel" id="phone" placeholder="123-456-7890" required pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input><br></br>

    <h4>Payment Info (optional)</h4>
    <label for="payment">Card Type: </label>
    <select id="payment" onChange={handleChange}>
      <option value="" disabled selected hidden>Select Card Type</option>
      <option value="Visa">Visa</option>
      <option value="MasterCard">MasterCard</option>
      <option value="Discover">Discover</option>
      <option value="American Express">American Express</option>
    </select><br></br>


    <label for="cardNumber">Card Number: </label>
    <input onChange={handleChange} type="cardNumber" id="cardNumber" placeholder="Card number"></input><br></br>

    <label for="expiration">Expiration Date: </label>
    <input onChange={handleChange} type="text" id="expiration" placeholder="12/2024" pattern="[0-1][0-9]/[0-9]{4}"></input><br></br>
   
    <label for="cvc">CVC: </label>
    <input onChange={handleChange} type="text" id="cvc" placeholder="123"></input><br></br>

    <h4>Address (optional)</h4>
    <label for="street">Street: </label>
    <input onChange={handleChange} type="text" id="street" placeholder="790 S Lumpkin St"></input><br></br>
    <label for="city">City: </label>
    <input onChange={handleChange} type="text" id="city" placeholder="Athens"></input><br></br>
    <label for="state">State: </label>
    <input onChange={handleChange} type="text" id="state" placeholder="GA"></input><br></br>
    <label for="zip">Zip Code: </label>
    <input onChange={handleChange} type="text" id="zip" placeholder="30602"></input><br></br><br></br><br></br>

    <label for="promotion">Register for Promotions</label>
    <input onChange={handleChange} type="checkbox" id="promotion" checked={formData.promotion}></input><br></br>


    <input className="FinishButton" type="reset"></input>
    <input 
      className="FinishButton" 
      type="submit"
      value={loading ? "Creating Account..." : "Create Account"}
      disabled={loading} // Disable when loading
    ></input>
  </form>
  </div>
  </>
}