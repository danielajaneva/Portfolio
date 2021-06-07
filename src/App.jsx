import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./css/main.css";

import Sidebar from "./components/Sidebar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Sidebar />
        <Route path="/Portfolio" exact component={Home} />
        <Route path="/Portfolio/about" component={About} />
        <Route path="/Portfolio/work" component={Work} />
        <Route path="/Portfolio/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
};

export default App;