import "../styles.css"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
export function OrderConfirmation() {
    return <>
    <Navbar />
    <div className="wholepage">
    <h1 className="below">Congrats! You have successfully booked your tickets!</h1>
    <Link to="/" className="linkk">Home</Link>
    </div>
    </>
}