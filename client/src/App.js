import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import RegistrationForm from './Components/Auth/RegistrationForm';
import LandingPage from './Components/LandingPage';

import SignInForm from './Components/Auth/SignInForm';

import Curdoperation from './Components/CURD/Curdoperation';

import Navbar from './Components/NavBar';
const App = () => {
  return (
    <>
      <BrowserRouter>
   <Navbar/>
        <Routes>



             <Route path="/" element={<LandingPage/>} /> 
             <Route path="/signup" element={<RegistrationForm/>} /> 
             <Route path="/signin" element={< SignInForm/>} /> 
             <Route path="/curd" element={< Curdoperation/>} /> 


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

