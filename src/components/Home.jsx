import React from "react";

import Footer from "./Footer";

const Home = () => {
  return (
    <section className="home">
      <div className="home__paragraph">
        <span className="heading-italic">{"<html>"}</span>
        <div className="padding">
          <span className="heading-italic">{"<body>"}</span>
          <div className="p">
            <span className="heading-italic">{"<h3>"}</span>
            <h3 className="heading-3">Welcome , I'm</h3>
            <span className="heading-italic">{"</h3>"}</span>
          </div>
          <div className="p">
            <span className="heading-italic">{"<h1>"}</span>
            <h1 className="heading-1">Daniela</h1>
            <span className="heading-italic">{"</h1>"}</span>
          </div>
          <div className="p">
            <span className="heading-italic">{"<h3>"}</span>
            <h3 className="heading-3">A junior frontend developer</h3>
            <span className="heading-italic">{"</h3>"}</span>
          </div>
          <span className="heading-italic">{"</body>"}</span>
        </div>

        <span className="heading-italic">{"</html>"}</span>
        <Footer />
      </div>
    </section>
  );
};

export default Home;
