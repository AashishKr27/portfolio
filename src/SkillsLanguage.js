import React from "react"
// import "./SkillsLanguage.css"

const SkillsLanguage = ({ skill1, skill2, skill3, skill4, level1, level2, level3, level4 }) => {
  return (
    <div>
      <div className="oa">
        <h1 className="ob">{skill1}</h1>
        <span className={`${level1} oc`}></span>
      </div>
      <div className="oa">
        <h1 className="ob">{skill2}</h1>
        <span className={`${level2} oc`}></span>
      </div>
      <div className="oa">
        <h1 className="ob">{skill3}</h1>
        <span className={`${level3} oc`}></span>
      </div>
      <div className="oa">
        <h1 className="ob">{skill4}</h1>
        <span className={`${level4} oc`}></span>
      </div>
    </div>
  )
}

export default SkillsLanguage
