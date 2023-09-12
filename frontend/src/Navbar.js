import React, {useEffect} from "react";
import {NavLink, useNavigate} from "react-router-dom";




const Navbar = ({isAuthenticated, handleLogOut}) => {

    

    return(
        <nav>
        {isAuthenticated? (
            <div>
                <NavLink exact to ="/"> Home </NavLink>
                <NavLink exact to ="/companies"> Companies </NavLink>
                <NavLink exact to ="/jobs"> Jobs </NavLink>
                <NavLink exact to ="/profile"> Profile </NavLink>
                <NavLink exact to ="/logout" onClick={handleLogOut}> Log Out </NavLink>
            </div>
        ): (
            <div>
                <NavLink exact to ="/login"> Log In </NavLink>
                <NavLink exact to ="/signup"> Sign Up </NavLink>
                <NavLink exact to ="/"> Home </NavLink>

                
            </div>

        )}
        </nav>
    )
}


export default Navbar;