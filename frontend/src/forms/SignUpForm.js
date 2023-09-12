import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = ({setIsAuthenticated}) => {

    const navigate = useNavigate();

    const InitialState = {
        username: "", 
        password: "", 
        firstName: "", 
        lastName: "", 
        email: ""
    }

    const API_URL = "http://localhost:3001";

    const [formData, setFormData] = useState(InitialState);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data=>({
            ...data, 
            [name]: value
        }))

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post (`${API_URL}/auth/register`, formData)
            console.log("registration successful!", response);
            setFormData(InitialState);

            setIsAuthenticated(true)

            navigate("/");

    
        } catch (error) {
            console.error(error)
        }
     
    }
    return(
        <form onSubmit={handleSubmit}>

            <label htmlFor="username">Username</label>
            <input 
                id="username"
                type="text"
                name="username"
                placeholder="username"
                value={formData.username}
                onChange={handleChange}
            />

            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />

            <label htmlFor="firstName">First Name</label>
            <input 
                id="firstName"
                type="text"
                name="firstName"
                placeholder="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />

            <label htmlFor="lastName">Last Name</label>
            <input 
                id="lastName"
                type="text"
                name="lastName"
                placeholder="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="email"
                name="email"
                placeholder="email"
                value={formData.email}
                onChange={handleChange}
            />

            <button>Sign Up</button>


        </form>
    )
}


export default SignUpForm;