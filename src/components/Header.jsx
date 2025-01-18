import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav>
        <h1>LOREM</h1>
        <main>
          <Link to={"/home"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/#about"}>About</Link>
          <Link to={"/brands"}>Brands</Link>
          <Link to={"/service"}>Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
