import React, { useEffect, useState } from 'react'

import SkillLogo from './SkillLogo.js'


function SkillItem({skillName}) {
  
  const [skillLogo, setSkillLogo] = useState()  

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
