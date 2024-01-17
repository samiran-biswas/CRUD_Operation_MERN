// SignInForm.js
import React, { useState } from 'react';
import axios from 'axios';
import "../css/SignIn.css"
const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      // Send sign-in request to the server using Axios
      const response = await axios.post('http://localhost:8000/signin', formData);

      // Store the token in local storage or cookies for future requests
      localStorage.setItem('jwtTokenTest', response.data.token);

      setErrorMessage('');
      console.log('Sign in successful!');
      // Redirect or update state as needed
    } catch (error) {
      // Handle sign-in error
      setErrorMessage('Invalid email or password');
    }
  };

  return (
    <div>
      <form onSubmit={handleSignIn}>
        {/* Your sign-in form fields go here */}
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>

      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default SignInForm;
