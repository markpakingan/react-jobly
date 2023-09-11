import React from "react";
import {NavLink} from "react-router-dom";



const handleLogOut = () => {
    localStorage.removeItem("token")
}
const Navbar = () => {
    return(
        <nav>
            <NavLink exact to ="/"> Home </NavLink>
            <NavLink exact to ="/companies"> Companies </NavLink>
            <NavLink exact to ="/jobs"> Jobs </NavLink>
            <NavLink exact to ="/login"> Log In </NavLink>
            <NavLink exact to ="/signup"> Sign Up </NavLink>
            <NavLink exact to ="/profile"> Profile </NavLink>
            <NavLink exact to ="/logout" onClick={handleLogOut}> Log Out </NavLink>

        </nav>
    )
}


export default Navbar;