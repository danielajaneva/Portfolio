import React from "react";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <section className="footer">
      <footer>
        <p>Created by Daniela Janeva &copy; {getCurrentYear()}</p>
      </footer>
    </section>
  );
}

export default Footer;
