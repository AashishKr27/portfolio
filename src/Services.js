"use client";
import { cibInstagram, cibLeetcode, cibLinkedinIn } from "@coreui/icons";
import { cibGithub } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import codechef from "./codechef.png";
import gfg from "./gfg.png";
// import "./Services.css"
const Services = () => {
  return (
    <>
      <div className="sa">
        <p className="heading">
          My <span className="sb">Services</span>
        </p>
        <div className="sc">
          <div data-aos="fade-right">
            <div className="sh sd">
              <CodeBracketSquareIcon className="se" />
              <h1 className="sf">Frontend developer</h1>
              <p className="sg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                reiciendis corrupti dolorum veniam autem officia blanditiis aut
                eaque, temporibus maxime!
              </p>
            </div>
          </div>
          <div data-aos="zoom-in" data-aos-delay="150">
            <div className="xx sh">
              <RocketLaunchIcon className="se" />
              <h1 className="sf">backend developer</h1>
              <p className="sg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                reiciendis corrupti dolorum veniam autem officia blanditiis aut
                eaque, temporibus maxime!
              </p>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="xy sh">
              <CommandLineIcon className="se" />
              <h1 className="sf zz">Machine Leraning</h1>
              <p className="sg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                reiciendis corrupti dolorum veniam autem officia blanditiis aut
                eaque, temporibus maxime!
              </p>
            </div>
          </div>
        </div>
        <div className="zara">
          <p className="heading">
            SOCIAL <span className="sb">PROFILES</span>
          </p>
          <div className="socialP">
            <a
              href="https://leetcode.com/u/Ashish_Kumar_Sa_2003/"
              rel="noreferrer"
              target="_blank"
              className="papa"
            >
              <CIcon className="cicon" icon={cibLeetcode} />
            </a>
            <a
              href="https://www.geeksforgeeks.org/user/fiitjeeashishkumar/"
              rel="noreferrer"
              target="_blank"
              className="papa"
            >
              <img src={gfg} alt="gfg" className="cicon" />
            </a>
            <a
              href="https://www.codechef.com/users/ashish_kr_27"
              rel="noreferrer"
              target="_blank"
              className="papa"
            >
              <img src={codechef} alt="codechef" className="cicon" />
            </a>
            <a
              href="https://github.com/AashishKr27"
              rel="noreferrer"
              target="_blank"
              className="papa"
            >
              <CIcon className="cicon" icon={cibGithub} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashish-kumar-89b6a824b/"
              rel="noreferrer"
              target="_blank"
              className="papa"
            >
              <CIcon className="cicon" icon={cibLinkedinIn} />
            </a>
            <a
              href="https://www.instagram.com/kumar_ashish_sa.27/?hl=en"
              rel="noreferrer"
              target="_blank"
              className="papa"
            >
              <CIcon className="cicon" icon={cibInstagram} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
