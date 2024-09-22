import "../styles.css"
import { Link } from "react-router-dom"
import { MakeHeader } from "../components/MakeHeader"
export function LogIn() {
    return <>
    <MakeHeader />
    <h1>Log in</h1>
    <span>New User? Sign up </span>
    <Link className="linkk "to="/createaccount">here!</Link>
    <form method="POST">
    <label for="username">Username: </label>
    <input type="text" id="username" placeholder="Your Username" required></input><br></br>

    <label for="password">Password: </label>
    <input type="password" id="password" placeholder="Your Password" required></input><br></br>
    <input className="FinishButton" type="submit"></input>
    </form>
    </>
}