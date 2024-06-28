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
          <SkillsItems title="Mern Stack Developer" year="2022-present" />
          <SkillsLanguage
            skill1="REACT JS"
            skill2="css"
            skill3="JavaScript"
            level1="l1"
            level2="l2"
            level3="l3"
          />
        </div>
        <div data-aos="fade-right">
          <SkillsItems title="Next JS Developer" year="2022-present" />
          <SkillsItems title="Node JS Developer" year="2022-present" />
          <SkillsLanguage
            skill1="C++"
            skill2="PYTHON"
            skill3="tYPESCrIPT"
            level1="l4"
            level2="l5"
            level3="l6"
          />
        </div>
      </div>
    </div>
  )
}

export default Skills
