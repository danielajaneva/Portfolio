import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  const responsiveContent = (icon, name) =>
    windowSize.width < 600 ? <i className={icon}></i> : <span>{name}</span>;

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [windowSize.width]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/" className="sidebar__logo--link link">
          D
        </Link>
      </div>
      <nav className="sidebar__navigation">
        <Link to="/contact" className="sidebar__navigation--item link">
          {responsiveContent("far fa-address-card", "Contact")}
        </Link>
        <Link to="/work" className="sidebar__navigation--item link">
          {responsiveContent("fas fa-code", "Work")}
        </Link>
        <Link to="/about" className="sidebar__navigation--item link">
          {responsiveContent("far fa-user-circle", "About")}
        </Link>
      </nav>
      <div className="sidebar__info">
        <a
          href="https://www.linkedin.com/in/daniela-janeva-14851220b/"
          className="sidebar__info--item link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a
          href="https://www.facebook.com/danche.to.7/"
          className="sidebar__info--item link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </a>
        <a
          href="https://github.com/danielajaneva"
          className="sidebar__info--item link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
