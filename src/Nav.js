"use client"
// import { Bars3Icon } from "@heroicons/react/16/solid"
import React from "react"
import { Link } from "react-scroll"
// import "./Nav.css"
const Navbar = ({ openNav }) => {
  return (
    <>
      <div className="nava font-primary">
        <div className="navb">
          <h1 className="navc">
            WEB
            <span className="">DEV</span>
          </h1>
          <Link
            to={"hero"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Home
          </Link>
          <Link
            to={"about"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
          <Link
            to={"skills"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Skills
          </Link>
          <Link
            to={"contact"}
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar
