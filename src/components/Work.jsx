import React from "react";

import img1 from "../img/photo_1.JPG";
import img2 from "../img/photo_2.JPG";
import img3 from "../img/photo_3.JPG";
import img4 from "../img/photo_4.JPG";
import img5 from "../img/photo_5.JPG";
import img6 from "../img/photo_6.JPG";
import img7 from "../img/photo_7.JPG";
import img8 from "../img/photo_8.JPG";

const projects = [
  {
    name: "Natours",
    img: img1,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/Natours/",
  },
  {
    name: "Trillo",
    img: img2,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/Trillo/",
  },
  {
    name: "Nexter",
    img: img3,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/Nexter/",
  },
  {
    name: "TinDog",
    img: img4,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/TinDog/",
  },
  {
    name: "Widgets",
    img: img5,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/Widgets/",
  },
  {
    name: "Youtube",
    img: img6,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/searchYoutube/",
  },
  {
    name: "Keeper",
    img: img7,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/Keeper/",
  },
  {
    name: "Unsplash",
    img: img8,
    description: "Place where You can find a home that suits your lifestyle.",
    linkTo: "https://danielajaneva.github.io/searchImages/",
  },
];

const Work = () => {
  return (
    <>
      <div className="bg-image"></div>
      <section className="work">
        {projects.map(({ img, name, description, linkTo }) => {
          return (
            <div key={name} className="project">
              <img className="project__img" src={img} alt="projectPhoto" />
              <div className="project__name">{name}</div>
              <div className="project__description">{description}</div>
              <a href={linkTo} className="btn project__btn">
                View project
              </a>
            </div>
          );
        })}
        <div className="span" />
      </section>
    </>
  );
};

export default Work;
