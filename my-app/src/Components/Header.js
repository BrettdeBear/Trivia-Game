import NavBar from "./NavBar";
import PointsDisplay from "./PointsDisplay";
import Felix from "../assets/felix.png"






function Header() {
   return (
    <div>
        <h1>Peril! The Code-Blooded Trivia Game</h1>
        <img src={Felix} alt="Felix Quebec" />
        <NavBar />
    </div>
   )
}

export default Header;