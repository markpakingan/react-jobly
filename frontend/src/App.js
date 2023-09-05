import './App.css';
import Navbar from './Navbar';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './Home';
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import Profile from './Profile';
import CompanyList from "./CompanyList"; // Make sure to import the correct path
import CompanyDetails from "./CompanyDetails";
import JobList from './JobDetails';

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
