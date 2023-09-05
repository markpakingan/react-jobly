// LoginForm.js file from Frontend

import React, {useState} from "react";



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

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, password} = formData;
        setFormData(InitialState)
        alert(`the username is ${formData.username} and the password is ${formData.password}`)
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