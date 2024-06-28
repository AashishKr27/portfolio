import React from "react"
import { TypeAnimation } from "react-type-animation"
// import "./TextEffect.css"
const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        "Web Developer..",
        1500, // wait 1s before replacing "Mice" with "Hamsters"
        "Programmer..",
        1500,
        "ML Engineer..",
        1500
      ]}
      speed={50}
      className="va"
      repeat={Infinity}
    />
  )
}
export default TextEffect
