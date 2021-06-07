import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/Portfolio" className="sidebar__logo--link link">
          D
        </Link>
      </div>
      <nav className="sidebar__navigation">
        <Link
          to="/Portfolio/contact"
          className="sidebar__navigation--item link"
        >
          Contact
        </Link>
        <Link to="/Portfolio/work" className="sidebar__navigation--item link">
          Work
        </Link>
        <Link to="/Portfolio/about" className="sidebar__navigation--item link">
          About
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
