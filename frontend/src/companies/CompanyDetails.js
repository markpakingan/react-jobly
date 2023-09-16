import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./companyDetails.css"

const APICOMPANYLIST = "http://localhost:3001/companies";

const CompanyDetails = () => {
  const { handle } = useParams();
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.href = "http://localhost:3000/companies";
  }

  useEffect(() => {
    async function getCompanyDetails() {
      try {
        const response = await axios.get(`${APICOMPANYLIST}/${handle}`);
        const data = response.data;
        setDetails(data.company);
        console.log("API for company details", data.company);

      } catch (error) {
        console.error("Error fetching company details:", error);
      }
    }
    getCompanyDetails();
  }, [handle]);

  return (
    <div className="companyDetails-div">
      <h1>Company Details</h1>
      {details && (
        <div>
          <h2>{details.name}</h2>
          <h3>Jobs:</h3>
          <ul>
            {details.jobs.map((job) => (
              <li key={job.id}>
                <div>
                    Title: {job.title},
                </div>
                    Salary: {job.salary}
                <div>
                    Equity: {job.equity} 
                </div>

                <button onClick={handleClick}>Back</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CompanyDetails;
