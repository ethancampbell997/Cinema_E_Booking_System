import "../styles.css"
import Navbar from "../components/Navbar"
export function OrderSummary() {
    return <>
    <Navbar />
    <div className="wholepage">
    <h1 className="below">Order Summary</h1>
    <p>Movie: *Selected Movie*</p>
    <p>Time: *Selected Time*</p>
    <p>Seats: *Selected Seats*</p>
    <p>Order Total: *Total Price*</p>
    <button>Delete Ticket</button>
    <button>Update Order</button>
    <button>Continue to Checkout</button>
    </div>
    </>
}