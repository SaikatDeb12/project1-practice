import React from "react";
import "../styles/home.scss";
import vg from "/img2.webp";
const Home = () => {
  return (
    <>
      <div className="home">
        <main>
          <h1>Lorem, ipsum.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum,
            magni?
          </p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics"></img>
      </div>
    </>
  );
};

export default Home;
