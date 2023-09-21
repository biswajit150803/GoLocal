import React from "react";
import "./about.css";
import Footer from "../../pages/Footer/Footer";
import Navbar from "../../pages/Navbar/Navbar";

function Members({ name, photo, linkedin, github, facebook, instagram }) {
  return (
    <div className="pt-16 mainbox">
      <div className="membercard ">
        <img className="img" src={photo} alt="profilephoto"/>
        <h4 className="text-2xl">{name}</h4>
        <div className="links">
          <a href={linkedin}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-linkedin"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
            </svg>
          </a>

          <a href={facebook}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />{" "}
            </svg>
          </a>

          <a href={instagram}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />{" "}
            </svg>
          </a>

          <a href={github}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              {" "}
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />{" "}
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="main22">
      <Navbar />
      <div className="heading22">
        <h1 className="text-5xl pt-4 mt-24 ml-24 h15">About Us</h1>
      </div>

      <div className="aboutcontent22 px-24 py-8">
        <div className="left_content22 pr-20 text-xl text-justify">
          <p>
            We are team Black Hats. We believe in providing a better business
            experience for the low level businesses. With 'E-Vendor' we are
            targeting the "Thellawalas" or simply the cart vendors who move
            around our locality selling their goods.
          </p>
          <p>
            This web app will help the customers connect with the vendors around
            them and get their location so that they can easily connect with
            them and buy from them. This will help both customers and the local
            cart vendors in numerous ways.
          </p>
        </div>
        <div className="right_content22"></div>
      </div>
      <div className="members pb-40">
        <h1 className="text-5xl pt-4 mt-8 ml-24">Meet Our Amazing Crew</h1>
        <div className=" list">
          <Members
            name="Biswajit Ghosh"
            photo="./1.png"
            instagram="https://www.instagram.com/biswajit_1508/"
            facebook="https://www.facebook.com/profile.php?id=100076164386998"
            linkedin="https://www.linkedin.com/in/biswajit-ghosh-2b0111219/"
            github="https://github.com/biswajit150803"
          />
          <Members
            name="Sattwik Das"
            photo="./2.png"
            instagram="https://www.instagram.com/7twik/"
            facebook="https://www.facebook.com/stephenite.sattwik"
            linkedin="https://www.linkedin.com/in/sattwik-das-90aa75249/"
            github="https://github.com/7twik"
          />
          <Members
            name="Amisha Kumari"
            photo="./am.jpg"
            instagram="https://www.instagram.com/amishasingh_2304"
            linkedin="https://www.linkedin.com/in/amisha-singh-07ab66262/"
            facebook="https://www.facebook.com/profile.php?id=100072944253264"
            github="https://github.com/Amisha-Singh-2002"
          />
         </div>
         <div className="list">

          <Members
            name="Ayushi Nayan"
            photo="./nayan.jpg"
            instagram="https://www.instagram.com/ayu04shi/"
            facebook="https://www.facebook.com/vibek.roy.3910"
            linkedin="https://www.linkedin.com/in/ayushi-nayan-515b7326b/"
            github="https://github.com/ayu06shi"
          />
          <Members
            name="Geetanjali Paul"
            photo="./anjali.jpg"
            instagram="https://instagram.com/__chiquitaa_?igshid=NzZlODBkYWE4Ng==/"
            facebook="https://www.facebook.com/vibek.roy.3910"
            linkedin="https://www.linkedin.com/in/geetanjali-pal/"
            github="https://github.com/Geetanjali-0402"
          />
           <Members
            name="Arnab Chakraborty"
            photo="./arnab2.jpg"
            instagram="https://instagram.com/arnab_chakraborty_black_jack?igshid=YTQwZjQ0NmI0OA==/"
            facebook="https://www.facebook.com/arnab.chakraborty.378199?mibextid=ZbWKwL"
            linkedin="https://www.linkedin.com/in/arnab-chakraborty-737492230/"
            github="https://github.com/ArnabChakraborty123"
          />
        </div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default About;
