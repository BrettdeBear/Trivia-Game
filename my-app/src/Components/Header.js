import NavBar from "./NavBar";
import PointsDisplay from "./PointsDisplay";
import Felix from "../assets/felixWelcome.png"


function Header() {
   return (
    <div id="header" className="header">
        <h1>Peril! The Code-Blooded Trivia Game</h1>
        <img src={Felix} alt="Dapper stick figure saying 'I'm your host, Felix Quebec!" />
        <NavBar />
    </div>
   )
}

export default Header;