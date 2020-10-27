import React, { useEffect, useState } from 'react'

import SkillLogo from './SkillLogo.js'


function SkillItem({skillName}) {
  
  const [skillLogo, setSkillLogo] = useState()
  console.log(SkillLogo)
  console.log(SkillLogo.JavaSctipt)
  console.log("* What: SkillLogo.JavaSctipt")
  console.log(SkillLogo[skillName])
  console.log("* What: SkillLogo[skillName]")
  console.log(skillName)
  console.log("* What: skillName")
  console.log(skillLogo)
  console.log("* What: skillLogo")

  useEffect(()=>{
    setSkillLogo(SkillLogo[skillName])
  }, [])


  return (
    <div className="skill_item">      
    {skillLogo &&
    <>
          <div className="skill__item_name">{skillName}</div>
          <div className="skill__item_icon"             
            style={{
              // background: `url(${require(skillData.logo)})`,
              // background: `url(${require("../../../assets/skill-icon/javascript.svg")})`,
              // Copied Path from Firestore.
                // => CAN be accessed.             
              backgroundImage: `url(${skillLogo})`,             
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>  
    </>                      
    }     
    
    </div>          
  )
}

export default SkillItem
