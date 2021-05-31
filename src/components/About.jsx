import React from "react";

import cv from "../img/CV.pdf";

const skills1 = [
  { name: "html", icon: "lni lni-html5" },
  { name: "css", icon: "lni lni-css3" },
  { name: "java script", icon: "lni lni-javascript" },
  { name: "react js", icon: "lni lni-react" },
  { name: "bootstrap", icon: "lni lni-bootstrap" },
  { name: "jquery", icon: "lni lni-angle-double-right" },
  { name: "ajax", icon: "lni lni-angle-double-right" },
  { name: "sass", icon: "lni lni-angle-double-right" },
  { name: "redux", icon: "lni lni-angle-double-right" },
];
// const skills2 = [
//   { name: "jquery", icon: jquery },
//   { name: "ajax", icon: ajax },
//   { name: "sass", icon: sass },
//   { name: "redux", icon: redux },
// ];

const About = () => {
  return (
    <>
      <div className="bg-image"></div>
      <section className="about">
        <div className="about__image"></div>
        <div className="about__info">
          <h2 className="about__info--heading">Hello! I am Daniela Janeva</h2>
          <p className="about__info--paragraph">
            Junior Frontend Developer specializing in frontend development.
            Experienced with all stages of architecture (planning and
            execution), but a person who always wants to upgrade its own
            knowledge (learn new things and branches) acquiring and mastering
            new skills.
          </p>
          <div className="about__info--skills">
            {skills1.map(({ name, icon }) => {
              return (
                <div className="skill" key={name}>
                  <div className="skill__icon">
                    <i className={icon}></i>
                  </div>
                  <div className="skill__name">{name}</div>
                </div>
              );
            })}
            {/* {skills2.map(({ name, icon }) => {
              return (
                <div className="skill">
                  <div className="skill__icon">
                    <img alt="img" src={icon}></img>
                  </div>
                  <div className="skill__name">{name}</div>
                </div>
              );
            })} */}
          </div>
          <a href={cv} download="danielaJaneva" className="btn btn-primary">
            Download CV
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
