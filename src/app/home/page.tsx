import React from "react";
import WorkProcess from "../(components)/WorkProcess/WorkProcess";
import Skills from "../(components)/Skills/Skills";
import Portfolio from "../(components)/Portfolio/Portfolio";
import Contact from "../(components)/Contact/Contact";
import Footer from "../(components)/Footer/Footer";

const Home = () => {
  return (
    <>
      <div className="px-[15px]">
        <Skills />
      </div>
      <Portfolio />
      <div className="px-[15px]">
        <WorkProcess />
      </div>
      <Contact />
      <div className="px-[15px] mb-[14px]">
        <Footer />
      </div>
    </>
  );
};

export default Home;
