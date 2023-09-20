import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Button from "react-bootstrap/esm/Button";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function Report() {
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
          <h1 className="text-5xl pt-4 mt-16 ml-24 h11">Report a Problem</h1>
          <div className="ml-24 text-m pt-2 pr-40 h44">
            Got a bug or facing issues? Fill out the form and we will resolve
            your issue within 24 hours.
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
              Send message
            </Button>
          </form>
        </div>
        <div className="right1 prob11"></div>
        {check ? (
          <>
            <div className="sent1">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 sticker1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z"
                />
              </svg>
              <div className="md:text-xs text1">
                Your message has been sent. We will respond to you within 24
                hours.
              </div>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}

export default Report;
