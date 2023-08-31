import React, {useEffect, useState} from "react";
import axios from "axios";


const APICOMPANYLIST = "http://localhost:3001/jobs";

const JobList = () => {

const [jobData, setJobData] = useState([])

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

)

}

export default JobList;