import { useState } from 'react';
 import { NavLink } from 'react-router-dom';
import './navbar.css';
//import { bars } from '@fortawesome/free-solid-svg-icons';
//////////////////////LANDING PAGE NAVBAR /////////////////
import { BsFillHddStackFill } from "react-icons/bs";
const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  
  return (
    <div className='nav-sticky'>
    <nav className="navbar1">
      <div className="container">
        <div className="logoo">
        <NavLink to="/">
        <img className='logN' src="./Logo.png" alt="Stopby_logo" />
        </NavLink>
        </div>
        <div className="menu-icon1" onClick={handleShowNavbar}>
          <BsFillHddStackFill />
        </div>
        <div className={`nav-elements1  ${showNavbar && 'active'}`}>
          <ul>
            <li className='hov'>
              <NavLink to="/">
                Home
                </NavLink>
            </li>
            <li className='hov'>
              <NavLink to="/business">Your business</NavLink>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default Navbar;