import React from "react"
// import Particles from "@tsparticles/react";
// import type { Container, Engine } from "tsparticles-engine";
// import { loadSlim } from "tsparticles-slim";
import TextEffect from "./TextEffect.js"
// import img from "next/img"
import ashish from "./ashish.png"
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid"
// import "./Hero.css"
import Resume from './resume.pdf'
const Hero = () => {
  // const particlesInit = useCallback(async (engine: Engine) => {
  //   console.log(engine);
  //   await loadSlim(engine);
  // }, []);
  // const particlesLoaded = useCallback(
  //   async (container: Container | undefined) => {
  //     await console.log(container);
  //   },
  //   []
  // );
  return (
    <div id="hero" className="ha">
      {/* <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 0,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      /> */}
      
      <div className="hb">
        <div className="hbbc">
          <h1 className="hc">
            HI, I`M <span className="hi">ASHISH !</span>
          </h1>
          <TextEffect />
          <p className="hj">
            I`m a 4th year undergrad and very skillful front-end developer and
            passionate in problem solving.
          </p>
          <div className="hk">
            <button className="hl">
              <a target="_blank" href={Resume} rel="noreferrer">
                Download CV
              </a>
              <ArrowDownTrayIcon className="hm" />
            </button>
          </div>
        </div>
        <div className="hn">
          <img priority={true} src={ashish} alt="ashish" className="photo" />
        </div>
      </div>
    </div>
  )
}

export default Hero
