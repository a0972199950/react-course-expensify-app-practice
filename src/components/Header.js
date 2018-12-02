import React from "react";
import { NavLink } from "react-router-dom";


const Header = () => (
    <div>
        <h1>Expensify-App</h1>
        <NavLink to="/" activeClassName="is-active" exact>HomePage</NavLink>
        <NavLink to="/create" activeClassName="is-active">CreatePage</NavLink>
    </div>
)

export default Header;