import { Link } from "react-router-dom"
export function MakeHeader(){
    return   <div id="header">
    <h3>E-Cinema</h3>
    <div className="links">
      <Link to="/" className="linkk">Home</Link>
      <Link className="linkk">Movies</Link>
      <Link className="linkk">Promotions</Link>
      <Link className="linkk" to="/login">Log In</Link>
      <Link className="linkk" to="/createaccount">Create Account</Link>
    </div>

  </div>
}