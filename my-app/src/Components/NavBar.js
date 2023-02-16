import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <>
            <h2>Menu</h2>
            <ul className="nav">
                <NavLink exact to="/">
                    <li>Game</li>
                </NavLink>
                <NavLink exact to="/submit">
                    <li>Submit Clue</li>
                </NavLink>
                <NavLink exact to="/saved">
                    <li>Saved Clues</li>
                </NavLink>
            </ul>
        </>
        
    )
}

export default NavBar;