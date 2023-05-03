import React from "react";

const Project = ({ id, title, description, image, url }) => {
  return (
    <div className="card" key={id}>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="card-description">
        <h4>{title}</h4>
        <p>{description}</p>
        <a href={url} className="primary-button">
          See the Project
        </a>
      </div>
    </div>
  );
};

export default Project;
