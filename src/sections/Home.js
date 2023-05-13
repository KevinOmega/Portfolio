import React from "react";
import Square from "../components/Square";

const Home = () => {
  return (
    <section id="Home" className="section default-section blue-section">
      <div className="info">
        <h1>Kevin Huayllas</h1>
        <h4>MERN Full-Stack Developer</h4>
        <h4>NEXT js Developer</h4>
        <a className="primary-button" href="#Contact">
          Hire me
        </a>
      </div>
      <div className="graph">
        <Square />
      </div>
    </section>
  );
};

export default Home;
