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
    description: "Inspire yourself, travel, see what nature can do for you.",
    linkTo: "https://danielajaneva.github.io/Natours/",
  },
  {
    name: "Trillo",
    img: img2,
    description: "Choose your travel destination and the hotel you wanna stay.",
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
    description: "Find new and interesting dogs nearby and a new friends.",
    linkTo: "https://danielajaneva.github.io/TinDog/",
  },
  {
    name: "Widgets",
    img: img5,
    description: "App with more widgets: translate, search Google and more...",
    linkTo: "https://danielajaneva.github.io/Widgets/",
  },
  {
    name: "Youtube",
    img: img6,
    description: "Search and stream videos/playlists from youtube.",
    linkTo: "https://danielajaneva.github.io/searchYoutube/",
  },
  {
    name: "Keeper",
    img: img7,
    description: "Write more , forget less, with this ToDo app.",
    linkTo: "https://danielajaneva.github.io/Keeper/",
  },
  {
    name: "Unsplash",
    img: img8,
    description: "Search and download HD images from unsplash.",
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
              <a
                href={linkTo}
                className="btn project__btn"
                target="_blank"
                rel="noopener noreferrer"
              >
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
