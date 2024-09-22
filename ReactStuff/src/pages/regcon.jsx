import "../styles.css"
import { MakeHeader } from "../components/MakeHeader"
import { Link } from "react-router-dom"
export function RegistrationConfirmation() {
    return <>
    <MakeHeader />
    <h1>Congrats! You have successfully registered your account!</h1>
    <Link to="/" className="linkk">Home</Link>
    </>
}