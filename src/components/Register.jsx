import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../pages/Navbar/Navbar";
import "./regc.css";
import axios from "axios";

const Register = () => {
  // const [passShow, setPassShow] = useState(false);
  // const [cpassShow, setCPassShow] = useState(false);

  const [inpval, setInpval] = useState({
    fname: "",
    email: "",
    password: "",
    cpassword: "",
  });


  const setVal = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;

    setInpval(() => {
      return {
        ...inpval,
        [name]: value,
      };
    });
  };
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const addUserdata = async (e) => {
    e.preventDefault();
    const newUser = {
      username: inpval.fname,
      email: inpval.email,
      password: inpval.password,
    };

    try {
      await axios.post("https://hawkerhut-back.onrender.com/api/customers/register", newUser);
      setError(false);
      setSuccess(true);
      window.location.replace("https://stopby.onrender.com");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
    <Navbar />
  
     
    <div className="signupOutDiv">
    <div>
          <div className="toptextlogin">One Place To Connect<br /> With Your</div>
          <div className="bottextlogin">Local Vendors</div>
          </div>
        <section className="signup-section">
          <div className="form-signup">
            <div className="form-heading">
              <h1>Hello,SignUp</h1>
              <p>SignUp and start using our services....</p>
            </div>
            <form className="signup-form">
            <div className="signup-form-input">
                <label className="signup-label" htmlFor="fname">Name</label>
                <input
                className="signup-input"
                  placeholder="Enter your Name..."
                  type="text"
                  value={inpval.fname}
                  onChange={setVal}
                  name="fname"
                  id="fname"
                  
                />
              </div>
              <div className="signup-form-input">
                <label className="signup-label" htmlFor="email">Email</label>
                <input
                className="signup-input"
                  placeholder="Enter your email..."
                  type="email"
                  value={inpval.email}
                  onChange={setVal}
                  name="email"
                  id="email"
                  
                />
              </div>
              <div className="signup-form-input">
              <label className="signup-label" htmlFor="password">Password</label>
                <input
                className="signup-input"
                  placeholder="Enter your password..."
                  type="password"
                  value={inpval.password}
                  onChange={setVal}
                  name="password"
                  id="password"
                />
              </div>
              <div className="outloginbtn">
              <button className="signup-btn" onClick={addUserdata}>Register</button> </div>  
              {success && (
          <span className="success">Successfull. You can login now!</span>
        )}
        {error && <span className="failure">Something went wrong!</span>}       
              <p className="topform123" style={{borderRadius:"5px"}}>
                  Already have an Account?{" "}
                  <NavLink  className="linkreglog" to="/">Login</NavLink>{" "}
                </p>
            </form>
            <ToastContainer />
          </div>
        </section>
      </div>

    </>
  );
};

export default Register;



// import { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "../pages/Navbar/Navbar";
// import "./regc.css";
// import axios from "axios";

// const Register = () => {
//   // const [passShow, setPassShow] = useState(false);
//   // const [cpassShow, setCPassShow] = useState(false);

//   const [inpval, setInpval] = useState({
//     fname: "",
//     email: "",
//     password: "",
//     cpassword: "",
//   });


//   const setVal = (e) => {
//     // console.log(e.target.value);
//     const { name, value } = e.target;

//     setInpval(() => {
//       return {
//         ...inpval,
//         [name]: value,
//       };
//     });
//   };
//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);

//   const addUserdata = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       username: inpval.fname,
//       email: inpval.email,
//       password: inpval.password,
//     };

//     try {
//       await axios.post("https://hawkerhut-back.onrender.com/api/customers/register", newUser);
//       setError(false);
//       setSuccess(true);
//       window.location.replace("https://stopby.onrender.com");
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <>
//     <Navbar />
  
     
//     <div className="signupOutDiv">
//         <section className="signup-section">
//           <div className="form-signup">
//             <div className="form-heading">
//               <h1>Hello,SignUp</h1>
//               <p>SignUp and start using our services....</p>
//             </div>
//             <form className="signup-form">
//             <div className="signup-form-input">
//                 <label className="signup-label" htmlFor="fname">Name</label>
//                 <input
//                 className="signup-input"
//                   placeholder="Enter your Name..."
//                   type="text"
//                   value={inpval.fname}
//                   onChange={setVal}
//                   name="fname"
//                   id="fname"
                  
//                 />
//               </div>
//               <div className="signup-form-input">
//                 <label className="signup-label" htmlFor="email">Email</label>
//                 <input
//                 className="signup-input"
//                   placeholder="Enter your email..."
//                   type="email"
//                   value={inpval.email}
//                   onChange={setVal}
//                   name="email"
//                   id="email"
                  
//                 />
//               </div>
//               <div className="signup-form-input">
//               <label className="signup-label" htmlFor="password">Password</label>
//                 <input
//                 className="signup-input"
//                   placeholder="Enter your password..."
//                   type="password"
//                   value={inpval.password}
//                   onChange={setVal}
//                   name="password"
//                   id="password"
//                 />
//               </div>
//               <div className="outloginbtn">
//               <button className="signup-btn" onClick={addUserdata}>Register</button> </div>  
//               {success && (
//           <span className="success">Successfull. You can login now!</span>
//         )}
//         {error && <span className="failure">Something went wrong!</span>}       
//               <p className="topform123">
//                   Already have an Account?{" "}
//                   <NavLink  to="/">Login</NavLink>{" "}
//                 </p>
//             </form>
//             <ToastContainer />
//           </div>
//         </section>
//       </div>

//     </>
//   );
// };

// export default Register;