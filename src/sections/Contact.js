import React, { useRef } from "react";
import { social } from "../api/social";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "template_gp1v7bb",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <footer id="Contact" className="bg-dark">
      <div className="title">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-center">
        <div className="social-media">
          {social.map((item) => (
            <div className="social-item" key={item.id}>
              <a href={item.url} target="_blank">
                <div className="icon">{item.icon}</div>
                <h4>{item.name}</h4>
              </a>
            </div>
          ))}
          <div
            className="qr"
            style={{ backgroundImage: "url(/images/qr.jpg)" }}
          ></div>
        </div>
        <div className="form bg-light">
          <form ref={form} onSubmit={sendEmail}>
            <h4>Send me a message</h4>
            <div className="form-center">
              <div className="form-item">
                <label htmlFor="#name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="KevinOmega"
                />
              </div>
              <div className="form-item">
                <label htmlFor="#email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="something@gmail.com"
                  name="user_email"
                />
              </div>
              <div className="form-item">
                <label htmlFor="#message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="name"
                  placeholder="I want a web page for my business"
                  rows="3"
                  name="message"
                />
              </div>
              <button className="primary-button" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
