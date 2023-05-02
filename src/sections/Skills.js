import React, { useState } from "react";
import { frontEndSkills, backEndSkills } from "../api/skills";

const Skills = () => {
  const [skills, setSkills] = useState({
    type: "front",
    content: frontEndSkills,
  });
  return (
    <section id="Skills">
      <div className="title">
        <h2>My Skills</h2>
      </div>
      <div className="skills-section">
        <div className="switcher">
          <div
            className={`item ${skills.type === "front" && "selected"}`}
            onClick={() =>
              setSkills({ type: "front", content: frontEndSkills })
            }
          >
            Front-End
          </div>
          <div
            className={`item ${skills.type === "back" && "selected"}`}
            onClick={() => setSkills({ type: "back", content: backEndSkills })}
          >
            Back-End
          </div>
        </div>
        <div className="skills-center">
          <ul>
            {skills.content.map((item, index) => (
              <li
                key={item.id}
                style={{
                  "--clr": item.color,
                  "--i": skills.content.length - index,
                }}
                className={item.name.toLowerCase()}
              >
                <span>{item.icon}</span>
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
