import { useRef, useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react';
//import AddBlog from '../AddBlog/AddBlog';
import "./Member.css";
import Admin from '../Admin/Admin';
const Member = () => {
    const userRef = useRef();
    const errRef = useRef();
    const myStorage = window.localStorage;
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false||myStorage.getItem("Adminuser"));
  

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user==="stopby" && pwd === "1234")
        {
            setSuccess(true);
            myStorage.setItem("Adminuser",true);
        }
        else
        {
            setErrMsg("Wrong Password for this username");
        }
    }
    function logout(){
        setSuccess(false);
        myStorage.removeItem("Adminuser");
    }
  return (
    <>{(success) ? 
        <div>
            <Admin logout={logout} />
        </div> :
        <div className="bgm1" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
		<div className="containerAd1">
			
			<div className="form_containerAd1">
                <section className="Appo21"> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 style={{fontSize:"20px"}}>Sign In</h1>
                    <form onSubmit={handleSubmit} className='polo1'>
                        <label htmlFor="username" style={{color:"black",border:"none",fontWeight:"500",fontSize:"20px"}}>Username:</label>
                        <input
                            className='kolo1'
                            type="text"
                            id="username"
                            placeholder='Please enter your username'
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password" style={{color:"black",border:"none",fontWeight:"500",fontSize:"20px"}}>Password:</label>
                        <input
                            className='kolo1'
                            type="password"
                            id="password"
                            placeholder='Please enter your password'
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button type='submit' className='btnad'>Sign In</button>
                    </form>
                </section>
                </div>
		</div>
		</div>
  }</>)
}

export default Member