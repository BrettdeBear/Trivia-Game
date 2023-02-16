import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <section className="nav">
            <h2 className="menu">Menu</h2>
            <ul>
                <NavLink className="navLink" exact to="/" activeClassName="active">
                    <li>Game</li>
                </NavLink>
                <NavLink className="navLink" exact to="/submit" activeClassName="active">
                    <li>Submit Clue</li>
                </NavLink>
                <NavLink className="navLink" exact to="/saved" activeClassName="active">
                    <li>Saved Clues</li>
                </NavLink>
            </ul>
        </section>
        
    )
}

export default NavBar;