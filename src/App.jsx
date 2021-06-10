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
      <BrowserRouter basename="/Portfolio">
        <Sidebar />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </BrowserRouter>
    </div>
  );
};

export default App;
