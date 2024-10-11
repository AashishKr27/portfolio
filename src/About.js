import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
// import img from "next/img"
import React from "react";
import aboutMe from "./aboutMe.png";
// import "./About.css"
import Resume from './resume.pdf'
const About = () => {
  return (
    <div id="about" className="aa">
      <div className="ab">
        <div className="">
          <h1 className="ac">ABOUT ME</h1>
          <h2 className="ad">
            Transforming <span className="text-yellow-400">Vision</span>
          </h2>
          <div className="ae">
            <span className="af"></span>
            <p className="ag">
              Hello, I'm Ashish. Passionate about problem solving, I bring 2
              years of experience in DSA & Frontend Development. I excel at C++,
              JavaScript, React Js, ML in Python. Committed to continuous
              learning and innovation, I aim to deliver exceptional results and
              make a meaningful impact in every project I undertake.
            </p>
          </div>
          <a target="_blank" href={Resume} rel="noreferrer">
            <button className="hl">
              Download CV
              <ArrowDownTrayIcon className="hm" />
            </button>
          </a>
        </div>
        <div data-aos="fade-left" className="aj">
          <img src={aboutMe} alt="user" className="aboutImg" />
          <div className="ak"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
