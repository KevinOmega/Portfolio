import React, { useRef, useState } from "react";
import { projects } from "../api/projects";
import Project from "./Project";

const Projects = () => {
  const [move, setMove] = useState(false);
  const [position, setPosition] = useState(0);
  const [x, setX] = useState(0);
  const carouselRef = useRef();
  const containerRef = useRef();

  const pointerOn = (e) => {
    carouselRef.current.style.transition = "";
    setMove(true);
    setX(e.clientX);
  };

  const pointerLeave = () => {
    carouselRef.current.style.transition = "0.3s ease-out";
    const carouselWidth = carouselRef.current.getBoundingClientRect().width;
    const containerWidth = containerRef.current.getBoundingClientRect().width;

    setMove(false);
    let newPosition = Number(
      carouselRef.current.style.transform.match(/-?\d+/)
    );
    console.log(carouselWidth - containerWidth, newPosition);

    if (newPosition > 0) {
      newPosition = 0;
    } else {
      console.log("si");
      newPosition = carouselWidth - containerWidth;
    }

    setPosition(newPosition);
    carouselRef.current.style.transform = `translateX(${newPosition}px)`;
  };

  const pointerMove = (e) => {
    if (move) {
      const movement = x - e.clientX;
      carouselRef.current.style.transform = `translateX(${
        position - movement
      }px)`;
    }
  };

  return (
    <section id="Projects" className="blue-section">
      <div className="title">
        <h2>Projects</h2>
      </div>
      <div className="projects-center" ref={containerRef}>
        <div
          className="projects-carousel"
          ref={carouselRef}
          onPointerDown={pointerOn}
          onPointerLeave={pointerLeave}
          onPointerUp={pointerLeave}
          onPointerMove={pointerMove}
        >
          {projects.map((item) => {
            return <Project {...item} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
