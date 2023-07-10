import { useState } from 'react';
 import { NavLink } from 'react-router-dom';
import './NavAdmin.css';
//import { bars } from '@fortawesome/free-solid-svg-icons';
//////////////////////LANDING PAGE NAVBAR /////////////////
import { BsFillHddStackFill } from "react-icons/bs";
const NavAdmin = (props) => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }
  function hawker(){
    props.changeTab(1);
}
function  hawker2(){
    props.changeTab(0);
}
function logout() {
    props.logout();
}
  
  return (
    <div className='nav-sticky2'>
    <nav className="navbar12">
      <div className="container2">
        <div className="logoo2">
        <NavLink to="/">
        <img className='logN' src="./Logo.png" alt="Stopby_logo" />
        </NavLink>
        </div>
        <div className="menu-icon2" onClick={handleShowNavbar}>
          <BsFillHddStackFill />
        </div>
        <div className={`nav-elements12  ${showNavbar && 'active'}`}>
          <ul>
            <li className='hov2' onClick={hawker2}>
               Transaction 
                
            </li>
            <li className='hov2' onClick={hawker}>
              Hawker
            </li>
            <li className='hov2' onClick={logout}>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default NavAdmin;