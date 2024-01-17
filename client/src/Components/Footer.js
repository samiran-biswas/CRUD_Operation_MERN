import React from 'react'
import '../css/NewFooter.css'
import { NavLink } from 'react-router-dom'
import logo from "../Images/Free.webp";

import { FiPhone, FiMail , FiFacebook, FiLinkedin, FiYoutube  } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";



const NewFooter = () => {
  return (
    <>

      {/* ------------------Footer Section----------------- */}

      <div className="SLA_footer ">
        <div className="container">
          <div className="row SLA_Footerdetails">
            <div className="col-md-3 minidiv">
            <img src={logo} alt="logo" className='ologo'/>
              <p className="s_footerContent mt-3">
                Loan Origination System is developed specially to support
                the loan application processing needs of banks and
                financial institutions.
              </p>
            </div>
            <div className='divoffooter'>
            <div className="col-md-3 p-0 ">
              <h3 className="mb-3">Quick Links</h3>
              <ul className="list-unstyled ">
                <li className="pb-2"><a href="/"><NavLink className="SLA_socialAnchor" to='/'>Home</NavLink></a> </li>
                <li className="pb-2"><a className="SLA_socialAnchor" href="/">Product</a> </li>
                <li className="pb-2"><a className="SLA_socialAnchor" href="/">Resources</a> </li>
                <li className="pb-2"><a className="SLA_socialAnchor" href="/">Solutions</a> </li>
                <li className="pb-2"><a href="/contact"><NavLink className="SLA_socialAnchor" to='/'>Contact</NavLink></a> </li>
              </ul>
            </div>
            <div className="col-md-3 p-0 ">
              <h3 className="mb-3">Company</h3>
              <ul className="list-unstyled ">
                <li className="pb-2"><a href="/"><NavLink className="SLA_socialAnchor" to='/about'>About</NavLink></a> </li>
                <li className="pb-2"><a  href="/" ><NavLink className="SLA_socialAnchor" to='/'>FAQs</NavLink></a> </li>
                <li className="pb-2"><a  href="/"><NavLink className="SLA_socialAnchor" to='/terms'>Terms & Conditions</NavLink></a> </li>
                <li className="pb-2"><a  href="/" ><NavLink className="SLA_socialAnchor" to='/privacy'>Privacy Policy</NavLink></a> </li>
              </ul>
            </div>
            </div>
            <div className="col-md-3 minidiv">
              <h3 className="mb-3">Contact Us</h3>
              <ul className="list-unstyled ">
                <li className="my-2 d-flex SLA_social pb-2">
                  <div style={{ marginRight: '5px', width: '12px' }}> <FiPhone /> </div> <a className="SLA_socialAnchor"
                  >&nbsp; +91 8076909119</a>
                </li>
                <li className="my-2 d-flex pb-2 SLA_social">
                  <div style={{ marginRight: '5px', width: '12px' }}>  <FiMail /></div> <a className="SLA_socialAnchor"
                  >&nbsp; support@test.com</a>
                </li>
                <li className="my-2 d-flex SLA_social">
                  <div style={{ marginRight: '5px', width: '15px' }}> <CiLocationOn /> </div> <a className="SLA_socialAnchor"
                  > &nbsp;+B-70, First Floor, Sector-2, Noida,<br />
                    &nbsp; Gautam Buddha Nagar,<br />
                    &nbsp;&nbsp;U.P-2013019</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr style={{color:"gray", margin:"0"}}/>
        <div className='container'>
          <div className='row'>
            <div className="col-md-6 SLA_copyWrite ">
              <p className="m-0 ">Copyright © 2023 LOS | Product of Edureify</p>
            </div>
            <div className='col-md-6 SLA_socialmedia'>
              <a href="https://www.facebook.com/edureify"  target="_blank" rel="noopener noreferrer"><button className='SLA_btn23'><FiFacebook style={{color:"white"}}/></button></a>
              <a  href="https://twitter.com/edureify" target="_blank" rel="noopener noreferrer"><button className='SLA_btn23'><FaXTwitter style={{color:"white"}}/></button></a>
              <a><button className='SLA_btn23'><FiLinkedin style={{color:"white"}}/></button></a>
              <a><button className='SLA_btn23'><FiYoutube style={{color:"white"}}/></button></a>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default NewFooter