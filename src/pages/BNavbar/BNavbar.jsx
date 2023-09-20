 import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbare.css";
import Badge from 'react-bootstrap/Badge';
//import { bars } from '@fortawesome/free-solid-svg-icons';
  ///////////////////////////////////HOMEPAGE NAVBAR /////////////////
import { BsFillHddStackFill } from "react-icons/bs";
const BNavbar = (props) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [userqq,setUserqq]=useState(props.url);
  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };
  React.useEffect(() => {
    setUserqq(props.url);
  });
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
            <BsFillHddStackFill />
          </div>
          {((props.user==="")||(props.user==null)||(props.user==undefined))?<>

          </>:
          <div className={`nav-elements  ${showNavbar && "active"}`}>
            <ul>
              <li className="hov"><img src={userqq} style={{width:"40px",height:"40px",borderRadius:"50%"}} alt="user_image"/> &nbsp;Welcome {props.user}</li>
              <li className="hov pot" onClick={home}>
                Home
              </li>
              <li className="hov pot" onClick={current}>
                Current Orders <Badge bg="secondary">{props.num}</Badge>
              </li>
              <li className="hov pot"  onClick={past}>
                Past Orders
              </li>
             
              
            </ul>
          </div>}
        </div>
      </nav>
    </div>
  );
};

export default BNavbar;



// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./navbare.css";
// import Badge from 'react-bootstrap/Badge';
// //import { bars } from '@fortawesome/free-solid-svg-icons';
//   ///////////////////////////////////HOMEPAGE NAVBAR /////////////////
// import { BsFillHddStackFill } from "react-icons/bs";
// const BNavbar = (props) => {
//   const [showNavbar, setShowNavbar] = useState(false);

//   const handleShowNavbar = () => {
//     setShowNavbar(!showNavbar);
//   };
//   function logout() {
//     window.location.reload();
//   }
//   function home(){
//     props.changeTab(0);
//   }
//   function current(){
//     props.changeTab(1);
//   }
//   function past(){
//     props.changeTab(2);
//   }
//   return (
//     <div className="nav-sticky">
//       <nav className="navbar">
//         <div className="container">
//           <div className="logo">
//             <NavLink to="/">
//               <img
//                 className="logN"
//                 src="../../../public/Logo.png"
//                 // src="https://res.cloudinary.com/dqy7m95yz/image/upload/v1677352785/icon2_1_pdxuih.png"
//                 alt="nf"
//               />
//             </NavLink>
//             {/* <img className='logN' src="https://res.cloudinary.com/dcyfkgtgv/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1672838305/Dark_Beige_Modern_Real_Estate_Building_Logo-removebg-preview_xx8tar.jpg" alt="nf" /> */}
//           </div>
//           <div className="menu-icon" onClick={handleShowNavbar}>
//             <BsFillHddStackFill />
//           </div>
//           {((props.user==="")||(props.user==null)||(props.user==undefined))?<>

//           </>:
//           <div className={`nav-elements  ${showNavbar && "active"}`}>
//             <ul>
//               <li className="hov">Welcome {props.user}, <img src={props.url} style={{width:"30px",height:"30px"}} /></li>

//               {/* <li className="hov">
//                 <NavLink to="/">Home</NavLink>
//               </li> */}
//               <li className="hov pot" onClick={home}>
//                 Home
//               </li>
//               <li className="hov pot" onClick={current}>
//                 Current Orders <Badge bg="secondary">{props.num}</Badge>
//               </li>
//               <li className="hov pot"  onClick={past}>
//                 Past Orders
//               </li>
             
              
//             </ul>
//           </div>}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default BNavbar;