import NavBar from "./NavBar";
import PointsDisplay from "./PointsDisplay";

function Header({points}) {
   return (
    <div>
        <NavBar />
        <PointsDisplay points={points}/>
    </div>
   )
}

export default Header;