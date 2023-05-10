import React from "react";
import { certificates } from "../api/certificates";
import Certificate from "../components/Certificate";

const Certificates = () => {
  return (
    <section id="Certificates">
      <div className="title">
        <h2>Certificates</h2>
      </div>
      <div className="certificates-center ">
        <div className="row justify-content-center ">
          {certificates.map((item) => (
            <Certificate {...item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
