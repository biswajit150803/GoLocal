import axios from "axios";
import { useRef, useState } from "react";
import "./login.css";

export default function Login({ setShowLogin,setBlocked,setUrl, setCurrentUsername, myStorage,userName,password,heading,login,wrong }) {
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };
    try {
      const res = await axios.post(
        "https://hawkerhut-back.onrender.com/api/users/login",
        user
      );
      if(!res.data.blocked){
        setCurrentUsername(res.data.username);
        setBlocked(res.data.blocked);
        setUrl(res.data.url);
        myStorage.setItem("user", res.data.username);
        myStorage.setItem("blocked", res.data.blocked);
        myStorage.setItem("url", res.data.url);
        setShowLogin();
      }
      else{
        setError(true);
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="loginContainer">
    <h6 className="lasttop" style={{color:"white"}}>{heading}</h6>
      <div className="formHawker1">
      <label style={{border:"none",color:"white"}}>{userName}</label>
        <input autoFocus placeholder="username" ref={usernameRef} />
        <label style={{border:"none",color:"white"}}>{password}</label>
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
        />

        <button className="loginBtn" onClick={handleSubmit}>
          {login}
        </button>
        {error && <span className="failure">{wrong}</span>}
      </div>
    </div>
  );
}


// import axios from "axios";
// import { useRef, useState } from "react";
// import "./login.css";

// export default function Login({ setShowLogin, setCurrentUsername, myStorage,userName,password,heading}) {
//   const [error, setError] = useState(false);
//   const usernameRef = useRef();
//   const passwordRef = useRef();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const user = {
//       username: usernameRef.current.value,
//       password: passwordRef.current.value,
//     };
//     try {
//       const res = await axios.post(
//         "https://hawkerhut-back.onrender.com/api/users/login",
//         user
//       );
//       setCurrentUsername(res.data.username);
//       myStorage.setItem("user", res.data.username);
//       setShowLogin();
//     } catch (err) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="loginContainer">
//     <h6 style={{color:"white"}}>{heading}</h6>
//       <div className="formHawker">
//         <label style={{border:"none",color:"white"}}>{userName}</label>
//         <input autoFocus placeholder="username" ref={usernameRef} style={{marginBottom:"2vh",borderRadius:"2px"}} />
//         <label style={{border:"none",color:"white"}}>{password}</label>
//         <input
//           type="password"
//           min="6"
//           placeholder="password"
//           ref={passwordRef}
//           style={{marginBottom:"2vh",borderRadius:"2px"}}
//         />
//         <button className="loginBtn" onClick={handleSubmit}>
//           Login
//         </button>
//         {error && <span className="failure">Something went wrong!</span>}
//       </div>
//     </div>
//   );
// }