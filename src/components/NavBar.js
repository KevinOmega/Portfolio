import React, { useState } from "react";

const NavBar = () => {
  const [active, setActive] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <h3>Logo</h3>
      </div>
      <div
        className={`nav-btn ${active && "active"}`}
        onClick={() => setActive(!active)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`links ${active && "active"}`}>
        <ul>
          <li>
            <a href="#Home" onClick={() => setActive(false)}>
              Home
            </a>
          </li>
          <li>
            <a href="#Skills" onClick={() => setActive(false)}>
              Skills
            </a>
          </li>
          <li>
            <a href="Projects" onClick={() => setActive(false)}>
              Projects
            </a>
          </li>
          <li>
            <a href="Certification" onClick={() => setActive(false)}>
              Certification
            </a>
          </li>
          <li>
            <a href="About" onClick={() => setActive(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href="Contact" onClick={() => setActive(false)}>
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
