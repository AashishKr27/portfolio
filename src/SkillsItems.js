import React from "react"
// import "./SkillsItems.css"

const SkillsItems = ({ title, year }) => {
  return (
    <div className="ja">
      <span className="jb">{year}</span>
      <h1 className="jc">{title}</h1>
      <p className="jd ">
      Skilled {title} with expertise in building dynamic, responsive web applications. Passionate about clean code, performance optimization, and delivering seamless user experiences. Committed to continuous learning and innovation.
      </p>
    </div>
  )
}

export default SkillsItems
