import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbare.css";
//import { bars } from '@fortawesome/free-solid-svg-icons';
  ///////////////////////////////////HOMEPAGE NAVBAR /////////////////
import { BsFillHddStackFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbare = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  function logout() {
    window.location.reload();
  }
function home(){
    props.changeTab(0);
}
function current(){
  props.changeTab(1);
}
function past(){
  props.changeTab(2);
}

  return (
    <div className="nav-sticky">
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img
                className="logN"
                src="./Logo.png"
                alt="nf"
              />
            </NavLink>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <GiHamburgerMenu />
          </div>
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="hov" style={{cursor:"pointer"}}>Welcome,{props.user}</li>

              
              <li className="hov" onClick={home}  style={{cursor:"pointer"}}>
                Home
              </li>
              <li className="hov" onClick={current} style={{cursor:"pointer"}}>
                Current Orders
              </li>
              <li className="hov" onClick={past}  style={{cursor:"pointer"}}>
                Past Orders
              </li>
              <li className="hov">
                <NavLink to="/contact">Contact</NavLink>
              </li>

              <li className="hov">
              <NavLink to="/about">
              <div className="abt">
                  About
                </div>
              </NavLink>
                
              </li>
              <li className="hov">
                <NavLink to="/" onClick={props.logout}>
                  Logout
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbare;
