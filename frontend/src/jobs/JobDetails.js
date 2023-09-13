import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const APICOMPANYLIST = "http://localhost:3001/jobs";

const JobList = ({isAuthenticated}) => {

const [jobData, setJobData] = useState([])
const navigate = useNavigate();

useEffect(()=>{
    async function fetchJobData(){
        try{
            const response = await axios.get(APICOMPANYLIST);
            const data= response.data
            setJobData(data.jobs)
        } catch(error) {
            console.error("Error fetching job details", error);
        }
    }
    fetchJobData();
},[] );


return(
    <div>
        {isAuthenticated ? (
            <div>

            <h1>Job List</h1>
            <ul>

                {jobData.map((job)=>(
                    <li key={job.id}>
                        <div>
                            {job.title}
                        </div>

                        <div>
                            {job.salary}
                        </div>

                        <div>
                            {job.companyName}
                        </div>


                    </li>
                ))}
            </ul>
            </div>
        ): (
        
                navigate("/")

        )}
        
    </div>

)

}

export default JobList;