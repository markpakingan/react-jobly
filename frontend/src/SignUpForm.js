import React, {useState} from "react";


const SignUpForm = () => {

    const InitialState = {
        username: "", 
        password: "", 
        firstname: "", 
        lastname: "", 
        email: ""
    }


    const [formData, setFormData] = useState(InitialState);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(data=>({
            ...data, 
            [name]: value
        }))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const {username, password, firstname, lastname, email} = formData;
        setFormData(InitialState);
        alert(`the username is ${username}, 
        the password is ${password}, 
        the firstname is ${firstname},
        the last name is ${lastname},
        the email is ${email}`)
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
                type="text"
                name="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
            />

            <label htmlFor="firstname">First Name</label>
            <input 
                id="firstname"
                type="text"
                name="firstname"
                placeholder="firstname"
                value={formData.firstname}
                onChange={handleChange}
            />

            <label htmlFor="lastname">Last Name</label>
            <input 
                id="lastname"
                type="text"
                name="lastname"
                placeholder="lastname"
                value={formData.lastname}
                onChange={handleChange}
            />

            <label htmlFor="email">Email</label>
            <input 
                id="email"
                type="text"
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