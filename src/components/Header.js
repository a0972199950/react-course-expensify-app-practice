import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../actions/auth";


const Header = (props) => (
    <div>
        <h1>Expensify-App</h1>
        <NavLink to="/dashboard" activeClassName="is-active" exact>HomePage</NavLink>
        <NavLink to="/create" activeClassName="is-active">CreatePage</NavLink>
        <button onClick={() => {
            props.startLogout()
        }}>Logout</button>
    </div>
);


const mapDispatchToProps = (dispatch) => ({
    startLogout: () => {
        dispatch(startLogout())
    }
});


export default connect(undefined, mapDispatchToProps)(Header);