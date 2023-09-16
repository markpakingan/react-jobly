import React, { useState, useEffect, createContext, useContext} from 'react';
import Navbar from './Navbar';
import Home from './homepage/Home';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import ProfileForm from './forms/ProfileForm';
import CompanyList from './companies/CompanyList';
import CompanyDetails from "./companies/CompanyDetails";
import JobList from './jobs/JobDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JoblyApi from './api/userapi';
import "./App.css"




function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [userName, setUsername] = useState(null);


  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
  }

  
  console.log("the new token for the app is", token);

  return (
    <BrowserRouter>
      
        <div>
          <Navbar isAuthenticated={isAuthenticated} handleLogOut={handleLogOut} />
          <Routes>
            <Route exact path="/" element={<Home isAuthenticated={isAuthenticated} userName={userName}/>} />
            <Route exact path="/companies" element={<CompanyList isAuthenticated={isAuthenticated}/>} />
            <Route exact path="/companies/:handle" element={<CompanyDetails />} />
            <Route exact path="/jobs" element={<JobList isAuthenticated={isAuthenticated} token={token}/>} />
            <Route exact path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} 
              setUsername={setUsername} setToken={setToken} />} />
            <Route exact path="/signup" element={<SignUpForm setIsAuthenticated={setIsAuthenticated} />} />
            <Route exact path="/profile" element={<ProfileForm token={token} userName={userName} isAuthenticated=
            {isAuthenticated}/>} />
          </Routes>
          </div>
      
    </BrowserRouter>

  
  );
};

export default App;
