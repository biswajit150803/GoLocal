import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function Work() {
  const form = useRef();
  const [check, setCheck] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dnafbtq",
        "template_5ddzwh9",
        form.current,
        "p0yOjKL--rx2Oq8nf"
      )
      .then(
        (result) => {
          setCheck(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="main1">
        <div className="left1">
          <h1 className="text-5xl pt-4 mt-16 ml-24 h11">
            Want to work with us
          </h1>
          <div className="ml-24 text-m pt-2 pr-40 h44">
            We would love to have you onboard. Join us today by filling out the
            form.
          </div>

          <form ref={form} onSubmit={sendEmail} className="form1 mt-8 ml-24 ">
            <label className="text-sm text-gray-400 labell">Name</label>
            <input
              placeholder="Enter your name"
              type="text"
              name="user_name"
              className="input1"
              required
            />
            <label className="text-sm text-gray-400 labell">Email</label>
            <input
              placeholder="Enter your email"
              type="email"
              name="user_email"
              className="input1"
              required
            />
            <label className="text-sm text-gray-400 labell">Message</label>
            <textarea
              placeholder="Enter your message"
              name="message"
              className="input1 msg1"
              required
            />
            <Button
              variant="secondary"
              type="submit"
              value="Send"
              className="button12"
            >
              Send my message
            </Button>
          </form>
        </div>
        <div className="right1 work11"></div>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Work;
