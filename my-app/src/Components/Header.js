import NavBar from "./NavBar";
import PointsDisplay from "./PointsDisplay";


function Header() {
   return (
    <div id="header" className="header">
        <h1>Peril!<br></br>The Code-Blooded Trivia Game</h1>
        <NavBar />
    </div>
   )
}

export default Header;