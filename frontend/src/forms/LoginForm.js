// LoginForm.js file from Frontend

import React, {useState} from "react";

import JoblyApi from "../api/userapi";

const LoginForm = () => {

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

        const response = await JoblyApi.request("auth/token", formData, "post")

        console.log("Success!", response);

        const token = response.token

        localStorage.setItem('token', token);

        console.log(localStorage.getItem('token'));


        setFormData(InitialState)

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
                type="text"
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