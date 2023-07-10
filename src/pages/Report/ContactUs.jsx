import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
function ContactUs() {
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
            alert("Message Sent Successfully");
          setCheck(true);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
          alert("Message Not Sent...Please check you have entered all the fields correctly");
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="main1">
        <div className="left1">
          <h1 className="text-5xl pt-4 mt-16 ml-24 h11">
            Get in touch with us
          </h1>
          <div className="ml-24 text-m pt-2 pr-40 h44">
            We would love to respond to your queries. Fill out the form and we
            will get back to you within 24 hours.
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
              className="button12 bg-indigo-500 border-indigo-500 border-2 text-white text-m rounded w-48 h-12"
            >
              Send Message
            </Button>
          </form>
        </div>
        <div className="right1 contact11"></div>
        
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default ContactUs;
