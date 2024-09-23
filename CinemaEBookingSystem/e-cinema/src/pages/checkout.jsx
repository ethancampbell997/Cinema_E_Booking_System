import "../styles.css"
import Navbar from "../components/Navbar"
export function Checkout() {
    return <>
    <Navbar />
    <h1>Checkout</h1>
    <p>Movie: *Selected Movie*</p>
    <p>Time: *Selected Time*</p>
    <p>Seats: *Selected Seats*</p>
    <p>Order Total: *Total Price*</p>
    <form method="POST">
        <label for="payment">Payment Method: </label><br></br>
        
        <label for="saved">Use your saved card</label>
        <input type="radio" id="saved" value="Saved Card" name="payment"></input><br></br>
        <label for="newCard">Enter a new card</label>
        <input type="radio" id="newCard" value="New Card" name="payment"></input><br></br>

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
    <input className="FinishButton" type="reset" value="Cancel"></input>
    <input className="FinishButton" type="submit" value="Confirm"></input>
    </form>
    </>
}