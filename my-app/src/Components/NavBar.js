import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <section className="nav">
            <h2>Menu</h2>
            <ul>
                <NavLink className="navLink" exact to="/">
                    <li>Game</li>
                </NavLink>
                <NavLink className="navLink" exact to="/submit">
                    <li>Submit Clue</li>
                </NavLink>
                <NavLink className="navLink" exact to="/saved">
                    <li>Saved Clues</li>
                </NavLink>
            </ul>
        </section>
        
    )
}

export default NavBar;