import React from "react"
// import "./SkillsItems.css"

const SkillsItems = ({ title, year }) => {
  return (
    <div className="ja">
      <span className="jb">{year}</span>
      <h1 className="jc">{title}</h1>
      <p className="jd ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquid
        dolor fuga sunt aliquam voluptas, repellendus magnam nemo sed? Eos
        molestiae obcaecati dolore possimus consequatur amet exercitationem
        dolores sint asperiores.
      </p>
    </div>
  )
}

export default SkillsItems
