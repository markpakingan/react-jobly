// LoginForm.js file from Frontend

import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import JoblyApi from "../api/userapi";

const LoginForm = ({setIsAuthenticated, setUsername}) => {

    const navigate = useNavigate();

    const InitialState = {
        username: "", 
        password: ""
    }

    const [formData, setFormData] = useState(InitialState);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await JoblyApi.request("auth/token", formData, "post");

        console.log("Success!", response);

        // console.log(localStorage.getItem('token'));

        const token = response.token
        const username = formData.username

        localStorage.setItem('token', token);
        JoblyApi.setToken(token);

        setFormData(InitialState);
        setIsAuthenticated(true);
        setUsername(username);

        navigate("/");
        

        try{

        }catch(error){
            console.error("registration error", error)
        }

    }

    return(

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
        </form>
    )
}


export default LoginForm;


