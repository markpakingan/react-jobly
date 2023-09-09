import './App.css';
import Navbar from './Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './homepage/Home';
import LoginForm from './forms/LoginForm';
import SignUpForm from './forms/SignUpForm';
import Profile from './Profile';
import CompanyList from './companies/CompanyList'; // Make sure to import the correct path
import CompanyDetails from "./companies/CompanyDetails";
import JobList from './jobs/JobDetails';
// import Navigation from './Navigation';

function App() {
  return (
   
    <div>
      <BrowserRouter>
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
      </BrowserRouter>
      
    </div>
  );
}

export default App;
