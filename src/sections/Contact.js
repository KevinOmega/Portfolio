import React, { useEffect, useRef, useState } from "react";
import { social } from "../api/social";
import emailjs from "@emailjs/browser";
import env from "react-dotenv";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current, env.PUBLIC_KEY)
      .then(
        (result) => {
          setEmail("");
          setName("");
          setMessage("");
          setBtnDisabled(true);
          console.log(result.text);
          setShowMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    if (showMessage) {
      let timer = window.setTimeout(() => {
        setShowMessage(false);
        setBtnDisabled(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <footer id="Contact" className="bg-dark">
      <div className="title">
        <h2>Contact Me</h2>
      </div>
      <div className="contact-center">
        <div className="social-media">
          {social.map((item) => (
            <div className="social-item" key={item.id}>
              <a href={item.url} target="_blank" rel="noreferrer">
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
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
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <button
                className="primary-button"
                type="submit"
                disabled={btnDisabled}
              >
                Send
              </button>
            </div>
          </form>
          <div className={`message ${showMessage && "active"} bg-success `}>
            <p>Your message has been sent successfully</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
