import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../css/Navbar.css";
// import { RiMenuAddFill } from "react-icons/ri";
import logo from "../Images/Free.webp";

const Navbar = () => {

  // const [isOpen, setIsOpen] = useState(false);
const [isNavbarOpen, setIsNavbarOpen] = useState(false);

const [jwtToken, setJwtToken] = useState(null);

const toggleNavbar = () => {
setIsNavbarOpen(!isNavbarOpen);
};


// ------------Check Token is present or not-------------

useEffect(() => {
  // Read the JWT token from localStorage when the component mounts
  const token = localStorage.getItem("jwtTokenLos");
  if (token) {
    setJwtToken(token);
  }

  // Set up a timer to refresh the token every, for example, 15 minutes
  const refreshTokenInterval = setInterval(() => {
    const newToken = localStorage.getItem("jwtTokenLos");
    if (newToken) {
      setJwtToken(newToken);
    }
  }, 1000); // 15 minutes in milliseconds

  // Clean up the timer when the component unmounts
  return () => {
    clearInterval(refreshTokenInterval);
  };
}, []);

// ---------------------------------

return (
    <>
    <div>
              <nav className="navbar navbar-expand-lg bg-body-tertiary NEWNAVBAR NAV d-flex justify-content-center">
        <div className='container'>
            {/* <nav className="navbar navbar-expand-lg"> */}
                {/* <div className="d-flex"> */}
                <div className="dynamic-wrapper2">
                    <NavLink to='/' className="navbar-brand">
                <img src={logo } alt="LOS Logo" className="logoofhome" /> </NavLink>
                </div>
                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-label="Toggle navigation" onClick={toggleNavbar} aria-expanded={isNavbarOpen}>
                         <span className="navbar-toggler-icon">
                         {/* <RiMenuAddFill className="react-icontoggle" /> */}
                         </span>
                     </button>
                    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                    {/* <div className="collapse navbar-collapse " id="navbarSupportedContent"> */}
                    <div className={`NAVBARPOPUP collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 s_Navmiddle">
                            <li className="nav-item">
                            <NavLink className="nav-link s_Aboutus" to="/">
                            Home
</NavLink>
                                {/* <a className="nav-link active s_Home" aria-current="page" href="/">Home</a> */}
                            </li>
                            {/* <li className="nav-item dropdown s_solutionDrop">
                            <NavLink className="nav-link s_Aboutus" to="/">
                            Solutions
</NavLink>
                              
                            </li> */}
                            {/* <li className="nav-item dropdown s_solutionDrop ">
                             
                            <NavLink className="nav-link s_Aboutus" to="/">
                            Products
</NavLink>
                               
                            </li> */}
                            {/* <li className="nav-item dropdown s_solutionDrop">

                            <NavLink className="nav-link s_Aboutus" to="/">
                            Resources
</NavLink>
                              
                            </li> */}
                            {/* <li className="nav-item">

                            <NavLink className="nav-link s_Aboutus" to="/about">
    About Us
</NavLink>

                              
                            </li> */}
                            {/* <li className="nav-item ">

                            <NavLink className="nav-link s_Contactus" to="/contact">
      Contact
</NavLink>
                               
                            </li> */}


                            {/* {jwtToken && (


<li className="nav-item">

<NavLink className="btn s_Login" to="/dashboard">
Dashboard
</NavLink>

</li>
)} */}

                        </ul>
                        <form className="d-flex s_Loginbuttons" role="search">
                       
                        {/* {jwtToken ? (

    <NavLink to="/logout">
      <button className="btn s_Login ">Logout</button>
    </NavLink>
  ) : (
    */}

    <NavLink to="/signin">
    <button className="btn s_Login ">Login</button>

</NavLink>
    <NavLink to="/signup">
    <button className="btn s_Login ">Signup</button>

</NavLink>
    <NavLink to="/curd">
    <button className="btn s_Login ">CURD</button>

</NavLink>
  {/* )} */}
                        </form>

                    </div>
      
        </div>
        </nav>
        </div>
    </>
)
}

export default Navbar;
