// components/LandingPage.js
import React from 'react';
import "../css/LandingPage.css";
// import Navbar from './NavBar';
import NewFooter from './Footer';
const LandingPage = () => {
  return (
    <>
    {/* <Navbar/> */}

    <div className="landing-page">
      <header>
        <h1>Your Company Name</h1>
        <p>Welcome to our platform. Connect, engage, and grow with us!</p>
      </header>
      <section className="features">
        <div className="feature">
          <h2>Feature 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="feature">
          <h2>Feature 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
        <div className="feature">
          <h2>Feature 3</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        </div>
      </section>
      <section className="cta">
        <h2>Join us today!</h2>
        <p>Sign up now to experience the benefits.</p>
        {/* Add a button or a link to your registration page */}
        <a href="/register" className="cta-button">
          Get Started
        </a>
      </section>
      <footer>
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>

    <NewFooter/>
    </>
  );
};

export default LandingPage;
