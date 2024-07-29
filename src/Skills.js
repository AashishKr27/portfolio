import React from "react"
import SkillsItems from "./SkillsItems.js"
import SkillsLanguage from "./SkillsLanguage.js"
// import "./Skills.css"
const Skills = () => {
  return (
    <div id="skills" className="ka">
      <h1 className="heading">
        Education & <span className="skillSpan">Skills</span>
      </h1>
      <div className="kb">
        <div data-aos="fade-left">
          <SkillsItems title="React JS Developer" year="2022-present" />
          <SkillsItems title="ML Engineer" year="2022-present" />
          <SkillsLanguage
            skill1="REACT JS"
            skill2="C"
            skill3="JavaScript"
            skill4="Java"
            level1="l1"
            level2="l2"
            level3="l3"
            level4="l7"
          />
        </div>
        <div data-aos="fade-right">
          <SkillsItems title="Vite JS Developer" year="2022-present" />
          <SkillsItems title="Programmer" year="2022-present" />
          <SkillsLanguage
            skill1="C++"
            skill2="PYTHON"
            skill3="tYPESCrIPT"
            skill4="HTML/CSS"
            level1="l4"
            level2="l5"
            level3="l6"
            level4="l8"
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
