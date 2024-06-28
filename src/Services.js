"use client"
import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon
} from "@heroicons/react/16/solid"
import React from "react"
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
              <h1 className="sf">Frontend</h1>
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
              <h1 className="sf">backend</h1>
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
              <h1 className="sf zz">Mern Stack</h1>
              <p className="sg">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
                reiciendis corrupti dolorum veniam autem officia blanditiis aut
                eaque, temporibus maxime!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
