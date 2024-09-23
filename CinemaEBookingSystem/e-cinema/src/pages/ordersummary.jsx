import "../styles.css"
import Navbar from "../components/Navbar"
export function OrderSummary() {
    return <>
    <Navbar />
    <h1>Order Summary</h1>
    <p>Movie: *Selected Movie*</p>
    <p>Time: *Selected Time*</p>
    <p>Seats: *Selected Seats*</p>
    <p>Order Total: *Total Price*</p>
    <button>Delete Ticket</button>
    <button>Update Order</button>
    <button>Continue to Checkout</button>
    </>
}