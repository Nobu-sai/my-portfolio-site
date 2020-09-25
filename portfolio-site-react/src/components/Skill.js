import React from 'react'
import '../style/section.css';
import '../style/skill.css';

function Skill() {
  return (

    <div className="section" id="skill">
      <div className="section__heading_container">
        <h1 className="section__heading">Skill</h1>
      </div>
      
      <div className="section_contents skill_contents">        
          {/* <table className="skill_table">
            <tr><td colspan="4" className="skill_category">Front End</td></tr>            
            <tr><td>HTML</td><td>CSS</td><td>JS</td><td>React.js</td></tr>
            <tr><td colspan="4" className="skill_category">Back End</td></tr>              
            <tr><td>Node.js</td><td>Firebase</td><td>MongoDB</td></tr>
                
          </table>  */}
        <div className="skill_list">
            <div className="skill_category">Front End</div>
            <div className="skill_item">HTML</div>
            <div className="skill_item">CSS</div>
            <div className="skill_item">JS</div>
            <div className="skill_item">React.js</div>
            <div className="skill_category">Back End</div>
            <div className="skill_item">Node.js</div>
            <div className="skill_item">Firebase</div>
            <div className="skill_item">MongoDB</div>            
        </div> 
        
      </div>
    </div>


  )
}

export default Skill
