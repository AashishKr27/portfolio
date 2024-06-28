import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"
// import img from "next/img"
import React from "react"
import aboutMe from "./aboutMe.png"
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
              vero dicta, repellendus blanditiis eveniet sapiente nihil,
              accusantium provident, officiis eaque sequi libero.
            </p>
          </div>
          <button className="ah">
            <a target="_blank" href={Resume} rel="noreferrer" >
              Download CV
            </a>
            <ArrowDownTrayIcon className="ai" />
          </button>
        </div>
        <div data-aos="fade-left" className="aj">
          <img
            src={aboutMe}
            priority={true}
            alt="user"
            className="aboutImg"
          />
          <div className="ak"></div>
        </div>
      </div>
    </div>
  )
}

export default About
