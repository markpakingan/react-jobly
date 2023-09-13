import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const APICOMPANYLIST = "http://localhost:3001/companies";

const CompanyList = ({isAuthenticated}) => {
  const [companies, setCompanies] = useState([]);

  const navigate = useNavigate();

  // Fetch data and update state
  useEffect(() => {
    async function fetchCompanies() {
      try {
        const response = await axios.get(APICOMPANYLIST);
        const data = response.data; 
        setCompanies(data.companies);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    }

    fetchCompanies();
  }, []);

  return (
    <div>

      {isAuthenticated ? (
        <div>
              <h1>Company List</h1>
              <ul>
                {companies.map((company) => (
                  <li key={company.handle}>
                    <Link to ={`/companies/${company.handle}`}>{company.name}</Link>
                  </li>
                ))}
              </ul>
        </div>
      ):(
        navigate("/")
      )}
    
     
    </div>
  );
};

export default CompanyList;
