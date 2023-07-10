import axios from "axios";
import { useRef, useState } from "react";
import "./register.css";

export default function Register({ setShowRegister,username,email,password,heading ,aadhar,upload,register,successful,wrong}) {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const usernameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     username: usernameRef.current.value,
  //     email: emailRef.current.value,
  //     password: passwordRef.current.value,
  //   };

  //   try {

  //     await axios.post("https://hawkerhut-back.onrender.com/api/users/register", newUser);
  //     setError(false);
  //     setSuccess(true);
      
  //   } catch (err) {
  //     setError(true);
  //   }
  // };

  ////////////////////////Aadhar Card////////////////////////


  const aadharRef = useRef();
  const [File, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const validateAadhaarNumber = (aadhar) => {
    const aadhaarRegex = /^\d{12}$/;
    return (aadhaarRegex.test(aadhar));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (aadharRef.current.value.length !== 12 || !validateAadhaarNumber(aadharRef.current.value)) {
      alert("Please enter a valid Aadhar Number");
    }
    else {
      const newUser = {
        username: usernameRef.current.value,
        email: emailRef.current.value,
        password: passwordRef.current.value,
        url: url.secure_url,
        aadhar: aadharRef.current.value
      };

      try {

        await axios.post("https://hawkerhut-back.onrender.com/api/users/register", newUser);
        setError(false);
        setSuccess(true);

      } catch (err) {
        setError(true);
      }
    }
  };

  const submitOne = async (event) => {
    const f1 = event.target.files[0];
    const data = new FormData()
    data.append("file", f1)
    data.append("upload_preset", "notepad")
    data.append("cloud_name", "dcyfkgtgv")
    const res = await fetch("https://api.cloudinary.com/v1_1/dcyfkgtgv/image/upload", {
      method: "post",
      body: data
    })
    const fil = await res.json();
    console.log(fil);
    setUrl(fil);
  }
  
  return (
    <div className="registerContainer">
    <h6 style={{color:"white"}}>{heading}</h6>
      <div className="formHawker reg">
      <label style={{border:"none",color:"white"}}>{username}</label>
        <input autoFocus placeholder="username" ref={usernameRef} style={{borderRadius:"3px"}}/>
        <label style={{border:"none",color:"white"}}>{email}</label>
        <input type="email" placeholder="email" ref={emailRef} style={{borderRadius:"3px"}} />
        <label style={{border:"none",color:"white"}}>{password}</label>
        <input
          type="password"
          min="6"
          placeholder="password"
          ref={passwordRef}
          style={{borderRadius:"3px"}}
        />
        <label style={{border:"none",color:"white"}}>{aadhar}</label>
        <input
          min="6"
          placeholder="Aadhar Number"
          ref={aadharRef}
        />
        <label style={{color:"white",border:"none"}}>{upload}</label>
            <input
              type="file"
              required
              onChange={submitOne} />
        <div className="file-field input-field">
          <div className="btn #64b5f6 blue darken-1">
            {/* <span style={{color:"white"}}>Upload Shop </span> */}
            
          </div>
          <p id="uidnote" className="instructions" style={{color:"orange",fontSize:"12px"}}>
            *Must Insert Image. in jpg/.png format preferably.
          </p>
        </div>
        <button className="registerBtn" onClick={handleSubmit}>
          {register}
        </button>
        {success && (
          <span className="success">{successful}</span>
        )}
        {error && <span className="failure">{wrong}</span>}
      </div>
      {/* <Cancel
        className="registerCancel"
        onClick={() => setShowRegister(false)}
      /> */}
    </div>
  );
}