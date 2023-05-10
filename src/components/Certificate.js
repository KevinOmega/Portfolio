import React from "react";

const Certificate = ({ id, name, brand, image, url }) => {
  return (
    <div className="col col-6 col-md-4 col-lg-3">
      <div className="card ">
        <div
          className="card-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-info">
          <h4>{name}</h4>
          <p>{brand}</p>
          <a
            className="primary-button"
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
