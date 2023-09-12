import React, {useState, useEffect} from "react";
import axios from "axios";
import JoblyApi from "./api/userapi";


const Profile = ({token, userName}) => {

    
    const [user, setUser] = useState(null);

    useEffect(()=> {
        const fetchUserInfo = async() => {
            try{
                const userInfo = await JoblyApi.getUserInfo(userName)
                setUser(userInfo)
            }catch(error){
                console.error("Error fetching user information", error)
            }
        };

        if(userName) {
            fetchUserInfo();
        }
    }, [userName]);


    return(
        <div>
            <h1>Welcome Back {userName}</h1>
        </div>
    )
}


export default Profile;