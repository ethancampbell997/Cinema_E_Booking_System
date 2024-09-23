import "../styles.css"
import Navbar from "../components/Navbar"
export function EditProf() {
    return <>
    <Navbar />
    <h1>Edit Profile</h1>
    <form method="POST">
    <label for="name">Name: </label>
    <input type="text" id="name" placeholder="John Doe"></input><br></br>

    <label for="username">Username: </label>
    <input type="text" id="username" placeholder="A Cool Username"></input><br></br>

    <label for="password">Password: </label>
    <input type="password" id="password" placeholder="Your Password"></input><br></br>

    <label for="email">Email: </label>
    <input type="email" id="email" placeholder="youremail@gmail.com"></input><br></br>

    <label for="phone">Phone Number: </label>
    <input type="tel" id="phone" placeholder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"></input><br></br>

    <h4>Payment Info</h4>
    <label for="payment">Card Type: </label>
    <select id="payment">
      <option value="Visa">Visa</option>
      <option value="MasterCard">MasterCard</option>
      <option value="Discover">Discover</option>
      <option value="American Express">American Express</option>
    </select><br></br>


    <label for="cardNumber">Card Number: </label>
    <input type="cardNumber" id="cardNumber" placeholder="Card number"></input><br></br>

    <label for="expiration">Expiration Date: </label>
    <input type="text" id="expiration" placeholder="12/2024" pattern="[0-1][0-9]/[0-9]{4}"></input><br></br>
   
    <h4>Address</h4>
    <label for="street">Street: </label>
    <input type="text" id="street" placeholder="790 S Lumpkin St"></input><br></br>
    <label for="city">City: </label>
    <input type="text" id="city" placeholder="Athens"></input><br></br>
    <label for="state">State: </label>
    <input type="text" id="state" placeholder="GA"></input><br></br>
    <label for="zip">Zip Code: </label>
    <input type="text" id="zip" placeholder="30602"></input><br></br><br></br><br></br>

    <input className="FinishButton" type="submit"></input>
  </form>
  </>
}