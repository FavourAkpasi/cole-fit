import React from "react";
import "./Main.css";
import bannerImg from "../../images/cole2.jpg";

const Main = () => {
  return (
    <main>
      <section className="banner">
        <img src={bannerImg} alt="main" />
      </section>
    </main>
  );
};

export default Main;
