import React from 'react'
import Heading from '../../Heading/Heading.js'
import '../Section.css';
import './Skill.css';


// Skill Icons
import htmlIcon from '../../../assets/skill-icon/html5.svg';
import cssIcon from '../../../assets/skill-icon/css3.svg';
import bootstrapIcon from '../../../assets/skill-icon/bootstrap.svg';
import jsIcon from '../../../assets/skill-icon/js.svg';
import reactjsIcon from '../../../assets/skill-icon/reactjs.svg';
import nodejsIcon from '../../../assets/skill-icon/nodejs.svg';
import expressjsIcon from '../../../assets/skill-icon/expressjs.svg';
import firebaseIcon from '../../../assets/skill-icon/firebase.svg';
import mongodbIcon from '../../../assets/skill-icon/mongodb.svg';
import figmaIcon from '../../../assets/skill-icon/figma.svg';




function Skill() {
  return (

    <div className="section" id="skill">
      <Heading  content="Skill" />
      
      <div className="section_contents skill_contents">                        
        <div className="skill_item">
          <div className="skill__item_name">HTML</div>
          <img className="skill__item_icon" src={htmlIcon} alt="HTML icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">CSS</div>
          <img className="skill__item_icon" src={cssIcon} alt="CSS icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">Bootstrap</div>
          <img className="skill__item_icon" src={bootstrapIcon}alt="Bootstrape icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">JavaScript</div>
          <img className="skill__item_icon" src={jsIcon} alt="JavaScript icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">React.js</div>
          <img className="skill__item_icon" src={reactjsIcon}
          alt="React.js icon"></img>
        </div>            
        <div className="skill_item">
          <div className="skill__item_name">Node.js</div>
          <img className="skill__item_icon" src={nodejsIcon}
          alt="Node.js icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">Express.js</div>
          <img className="skill__item_icon" src={expressjsIcon}alt="Express.js icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">Firebase</div>
          <img className="skill__item_icon" src={firebaseIcon}alt="Firebase icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">MongoDB</div>
          <img className="skill__item_icon" src={mongodbIcon}
          alt="MongoDB icon"></img>
        </div>     
        <div className="skill_item">
          <div className="skill__item_name">Figma</div>
          {/* <div className="coming_soon">* Coming Soon</div> */}
          <img className="skill__item_icon" src={figmaIcon}
          alt="Figma icon"></img>
        </div>               
      </div>


    </div>



  )
}

export default Skill
