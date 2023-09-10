import React, {useState, useEffect} from 'react';
import './App.css';
import Navbar from './Navbar';
// import { Route, Routes, BrowserRouter, Switch } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Home from './homepage/Home';
import Dashboard from './Dashboard';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import Profile from './Profile';
import LogOutForm from './forms/LogOutForm';
import CompanyList from './companies/CompanyList'; // Make sure to import the correct path
import CompanyDetails from "./companies/CompanyDetails";
import JobList from './jobs/JobDetails';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  // const [token, setToken] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(true)

  

  
  return (

    <div>

    
      <BrowserRouter>
          <Navbar/>
            <Routes>
              
              <Route exact path="/" element={ 
                isAuthenticated ? 
                (<Dashboard/> ):( <Navigate replace to={"/"} />)
              }/>


              <Route exact path="/companies" element={<CompanyList />}/>
              <Route exact path="/dashboard" element={<Dashboard />}/>
              <Route exact path="/companies/:handle" element={<CompanyDetails />}/>
              <Route exact path="/jobs" element={<JobList />}/>
              <Route exact path="/login" element={<LoginForm />}/>
              <Route exact path="/signup" element={<SignUpForm />}/>
              <Route exact path="/profile" element={<Profile />}/>
              <Route exact path="/logout" element={<LogOutForm />}/>

            </Routes>
      </BrowserRouter>
      
      {/* <BrowserRouter>
          <Navbar/>
            <Routes>
              
              <Route exact path="/" element={<Home />}/>
              <Route exact path="/companies" element={<CompanyList />}/>
              <Route exact path="/companies/:handle" element={<CompanyDetails />}/>
              <Route exact path="/jobs" element={<JobList />}/>
              <Route exact path="/login" element={<LoginForm />}/>
              <Route exact path="/signup" element={<SignUpForm />}/>
              <Route exact path="/profile" element={<Profile />}/>

            </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
