import "../styles.css"
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom"
export function RegistrationConfirmation() {
    return <>
    <Navbar />
    <h1>Congrats! You have successfully registered your account!</h1>
    <Link to="/" className="linkk">Home</Link>
    </>
}