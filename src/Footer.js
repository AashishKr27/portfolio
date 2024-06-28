import {
    DevicePhoneMobileIcon,
    EnvelopeIcon,
    MapIcon
  } from "@heroicons/react/16/solid"
  import React from "react"
  // import "./Footer.css"
  
  const Footer = () => {
    return (
      <div id="contact" className="fa">
        <div className="fb">
          <div className="fc">
            <div className="fd">
              <MapIcon className="fe" />
            </div>
            <div className="">
              <h1 className="ff">Address</h1>
              <p className="fg">F-176, Beta II, Greater Noida</p>
            </div>
          </div>
          <div className="fc">
            <div className="fd ">
              <DevicePhoneMobileIcon className="fe" />
            </div>
            <div className="">
              <h1 className="ff">Phone No</h1>
              <p className="fh">+91-7827449252</p>
            </div>
          </div>
          <div className="fc">
            <div className="fd">
              <EnvelopeIcon className="fi" />
            </div>
            <div className="">
              <h1 className="ff">Send Email</h1>
              <p className="fg">fiitjeeashishkumar@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="fj">
          <div className="fk ">ASHISH KUMAR | PORTFOLIO</div>
          <div className="fl">
            <a
              className="final"
              href="https://github.com/AashishKr27"
              target="_blank" rel="noreferrer"
            >
              GitHub
            </a>
            <a
              className="final"
              href="https://www.linkedin.com/in/ashish-kumar-3a692b2b4/"
              target="_blank" rel="noreferrer"
            >
              LinkedIN
            </a>
            <a
              className="final"
              href="https://leetcode.com/u/Ashish_Kumar_Sa_2003/"
              target="_blank" rel="noreferrer"
            >
              LeetCode
            </a>
          </div>
        </div>
      </div>
    )
  }
  
  export default Footer
  