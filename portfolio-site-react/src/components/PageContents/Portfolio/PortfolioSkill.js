import React from 'react'
import './PortfolioSkill.css';
import SkillLogo from '../../../assets/SkillLogo.js'


function PortfolioSkill({skillList}) {

  return (
    <div className="skill_container">
      
      { 
      Array.isArray(skillList) &&
        skillList.map((skill_name, index)=>(
          // <div
          //   className="skill_item"
          //   key={skill_name}
          // >           
            <div 
              className="skill_icon"
              id={skill_name}
              style={{
                height: '50px',
                backgroundImage: `url(${SkillLogo[`${skill_name}`]})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'contain'
              }}          
              key={skill_name}    
            ></div>        
          // </div>
        ))
      }   
          
    </div>
  )
}

export default PortfolioSkill;
