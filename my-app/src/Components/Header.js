import NavBar from "./NavBar";
import PointsDisplay from "./PointsDisplay";


function Header() {
    const fontStyle = {
        fontSize: 10,
    }


   return (
    <div id="header" className="header">
        <h1>Peril!<br></br><em>The Code-Blooded Trivia Game</em></h1>
        <NavBar />
    </div>
   )
}

export default Header;