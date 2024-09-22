import "../styles.css"
import { MakeHeader } from "../components/MakeHeader"
import { Link } from "react-router-dom"
export function OrderConfirmation() {
    return <>
    <MakeHeader />
    <h1>Congrats! You have successfully booked your tickets!</h1>
    <Link to="/" className="linkk">Home</Link>
    </>
}