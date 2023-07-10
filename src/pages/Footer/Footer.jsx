import { AiOutlineMail } from 'react-icons/ai';
import { MdOutlineCall } from 'react-icons/md';

import './Footer.css';
function Footer() {
  const emaill="info@gmail.com"
  return (
    <div className="Footer">
        <div className='text-box'>
            <div className="logo-element">
            <img className='logo' src="./Logo.png" alt=''/>
            </div>
              <div className='about-section'>
                <div className='about'>About</div>
                <div className='about-content'><a href='/About'>Who Are We?</a></div>
                {/* <div className='about-content'><a href='#blog'>Blog</a></div> */}
                <div className='about-content'><a href='/Contact'>Contact Us</a></div>
                <div className='about-content'><a href='/JoinUs'>Work With Us</a></div>
              </div>

              <div className='for-hawkers'>
                <div className='about'>For Hawkers</div>
                <div className='about-content'><a href='/Business'>Your Profile</a></div>
                <div className='about-content'><a href='/Business'>Edit</a></div>
                <div className='about-content'><a href='/Report'>Report Problem</a></div>
             </div>

             <div className='social-links'>
                <div className='about'>Social Links</div>
                <div className='about-content'><a href='#t'>Twitter</a></div>
                <div className='about-content'><a href='#l'>LinkedIn</a></div>
                {/* <div className='about-content'><a href='#g'>GitHub</a></div> */}
                <div className='about-content'><a href='#f'>Facebook</a></div>
             </div>
        </div>
        <div className='copyright'>
        <dic className='copyright-text'>All trademarks are properties of their respective owners. 2023 © Title™ Ltd. All rights reserved.</dic>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
        <div className='contactDetails'>
        <a href={`mailto:${emaill}`}>
        <AiOutlineMail style={{color:"white",fontSize:"18px"}} />&nbsp;
        <span style={{fontSize:"12px"}}>info@gmail.com</span>
        </a>
        &nbsp;&nbsp;
        <a href={`tel:1800243777`}>
        <MdOutlineCall style={{color:"white",fontSize:"18px"}}/>&nbsp;
        <span style={{fontSize:"12px"}}>1800243777</span>
        </a>
        </div>
        </div>
        
    </div>
  );
}

export default Footer;
