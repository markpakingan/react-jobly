import React, {useState, useEffect} from "react";
import axios from "axios";
import JoblyApi from "../api/userapi";
import { useNavigate } from "react-router-dom";
import "./profile-form.css"


const ProfileForm = ({userName, token, isAuthenticated}) => {

    const InitialState = {
        username:"",
        firstName:"",
        lastName:"",
        email:"" 
    }

    const [formData, setFormData] = useState(InitialState)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData, 
            [name]:value
        }))
    }
    
    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.put(
            `http://localhost:3001/users/${userName}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
      
          console.log("response.data", response.data);
          if (response.data) {
            // Update each field individually
            setFormData((prevData) => ({
              ...prevData,
              firstName: response.data.firstName,
              lastName: response.data.lastName,
              email: response.data.email,
            }));
            
            
            console.log("Profile updated successfully!", response.data);
          }
        } catch (error) {
          console.error("Error updating profile", error);
        }
      };
   
    useEffect(() => {
        const fetchUserInfo = async () => {
          try {
            // Make a GET request to fetch user information
            const response = await axios.get(`http://localhost:3001/users/${userName}`, {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
      
            // Set the user information in the component's state
            setFormData({
              username: response.data.user.username,
              firstName: response.data.user.firstName,
              lastName: response.data.user.lastName,
              email: response.data.user.email,
            });


          } catch (error) {
            console.error("Error fetching user information", error);
          }
        };
      
        if (userName) {
          fetchUserInfo();
        }
      }, [userName, token]);



      return (
        <div className="profile-form-div">
            {isAuthenticated? (
                
                <div>
                    <h1>Profile</h1>
                    
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
                        <label htmlFor="firstname"> Firstname</label>
                        <input 
                            id="firstname"
                            type="text"
                            name="firstName"
                            placeholder="firstname"
                            value={formData.firstName}
                            onChange={handleChange}
                        /> 

                        <label htmlFor="lastname"> Last Name</label>
                        
                        <input 
                            id="lastname"
                            type="text"
                            name="lastName"
                            placeholder="lastname"
                            value={formData.lastName}
                            onChange={handleChange}
                        /> 
                        <label htmlFor="email"> Email</label>
                    
                        <input 
                            id="email"
                            type="text"
                            name="email"
                            placeholder="email"
                            value={formData.email}  
                            onChange={handleChange}
                        /> 

                        <button onSubmit={handleSubmit}> Save Changes</button>
                    </form>
                </div>
            ):(
                navigate("/")
            )}

        </div>       
    )
}

export default ProfileForm;