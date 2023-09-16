// LoginForm.js file from Frontend

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./login-form.css";
import JoblyApi from "../api/userapi";

const LoginForm = ({setIsAuthenticated, setUsername, setToken}) => {

    const navigate = useNavigate();

    const InitialState = {
        username: "", 
        password: ""
    }

    const [formData, setFormData] = useState(InitialState);
    const [error, setError] = useState(null)


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]:value
        }))
    }

    const handleError = (error) => {
        setError(error); // Set the error message
      };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

        const response = await JoblyApi.request("auth/token", formData, "post");

        console.log("Success!", response);


        const token = response.token
        const username = formData.username

        // localStorage.setItem('token', token);
        setToken(token)
        JoblyApi.setToken(token);

        setFormData(InitialState);
        setIsAuthenticated(true);
        setUsername(username);

        navigate("/");
        
        console.log("the username is", username);

       

        }catch(error){
            console.error("registration error", error);
            handleError("Invalid login info. Please try again")
            
        }

    };

    return(

        <div className="login-form-div">

             <form onSubmit={handleSubmit}>
                <label htmlFor="username"> Username</label>
                <input 
                    id="username"
                    type="text"
                    name="username"
                    placeholder="username"
                    value={formData.username}
                    onChange={handleChange}
                /> 

            
                    
                <label htmlFor="password"> Password</label>
                <input 
                    id="password"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={formData.password}
                    onChange={handleChange}
                /> 

                <button> Submit</button>

                {error && <div className="error-message">{error}</div>}
            </form>

        </div>
       
    )
}


export default LoginForm;


