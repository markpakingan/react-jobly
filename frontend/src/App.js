import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './homepage/Home';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import Profile from './Profile';
import CompanyList from './companies/CompanyList';
import CompanyDetails from "./companies/CompanyDetails";
import JobList from './jobs/JobDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import JoblyApi from './api/userapi';

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isAuthenticated, setIsAuthenticated] = useState(!!token);
  const [userName, setUsername] = useState(null);

  const handleLogOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    setIsAuthenticated(false);
  }



  return (
    <BrowserRouter>
      <div>
        <Navbar isAuthenticated={isAuthenticated} handleLogOut={handleLogOut} />
        <Routes>
          <Route exact path="/" element={<Home isAuthenticated={isAuthenticated} userName={userName}/>} />
          <Route exact path="/companies" element={<CompanyList isAuthenticated={isAuthenticated}/>} />
          <Route exact path="/companies/:handle" element={<CompanyDetails />} />
          <Route exact path="/jobs" element={<JobList isAuthenticated={isAuthenticated}/>} />
          <Route exact path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} 
            setUsername={setUsername} />} />
          <Route exact path="/signup" element={<SignUpForm setIsAuthenticated={setIsAuthenticated} />} />
          <Route exact path="/profile" element={<Profile token={token} userName={userName} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
