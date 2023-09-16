import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./jobDetails.css";

const APICOMPANYLIST = "http://localhost:3001/jobs";

const JobList = ({ isAuthenticated, token}) => {
  const [jobData, setJobData] = useState([]);
  const [appliedJobs, setAppliedJobs] = useState([]); 
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchJobData() {
      try {
        const response = await axios.get(APICOMPANYLIST);
        const data = response.data;
        setJobData(data.jobs);
      } catch (error) {
        console.error("Error fetching job details", error);
      }
    }
    fetchJobData();
  }, []);

  const handleApply = async (jobId) => {
    try {
      // Check if the job is already applied
      if (appliedJobs.includes(jobId)) {
        alert("You have already applied for this job.");
      } else {
        // Send a POST request to apply for the job
        await axios.post(`http://localhost:3001/users/apply/${jobId}`, null, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Update the list of applied job IDs
        setAppliedJobs([...appliedJobs, jobId]);
        alert("Applied for the job!");
      }
    } catch (error) {
      console.error("Error applying for the job", error);
    }
  };

  return (
    <div className="jobDetails-div">
      {isAuthenticated ? (
        <div>
          <h1>Job List</h1>
          <ul>
            {jobData.map((job) => (
              <li key={job.id}>
                <div>{job.title}</div>
                <div>{job.salary}</div>
                <div>{job.companyName}</div>
                <button onClick={() => handleApply(job.id)}>
                  Apply
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        navigate("/")
      )}
    </div>
  );
};

export default JobList;
