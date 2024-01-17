// RegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      // Send registration request to the server using Axios
      const response = await axios.post('http://localhost:8000/register', formData);

      // Display success message on successful registration
      setSuccessMessage(response.data.message);
      setErrorMessage('');
    } catch (error) {
      // Handle registration error
      setSuccessMessage('');
      setErrorMessage('Registration failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleRegistration}>
        {/* Your registration form fields go here */}
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit">Register</button>
      </form>

      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default RegistrationForm;
