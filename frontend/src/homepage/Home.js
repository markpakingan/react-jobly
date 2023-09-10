import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
    return (
        <div>
            <h1> JOBLY</h1>

            <h2>Find The Right Job For You!</h2>

            <Link to="/login">
                <button>Login</button>
            </Link>

            <Link to="/signup">
                <button>Signup</button>
            </Link>
        </div>
    )
}


export default Home;