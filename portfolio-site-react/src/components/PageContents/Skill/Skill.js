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
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/html5.svg')} alt="HTML icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">CSS</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/css3.svg')} alt="CSS icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">Bootstrap</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/bootstrap.svg')} alt="Bootstrape icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">JavaScript</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/js.svg')} alt="JavaScript icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">React.js</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/reactjs.svg')}
          alt="React.js icon"></img>
        </div>            
        <div className="skill_item">
          <div className="skill__item_name">Node.js</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/nodejs.svg')}
          alt="Node.js icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">Express.js</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/expressjs.svg')}alt="Express.js icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">Firebase</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/firebase.svg')}alt="Firebase icon"></img>
        </div>
        <div className="skill_item">
          <div className="skill__item_name">MongoDB</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/mongodb.svg')}
          alt="MongoDB icon"></img>
        </div>     
        <div className="skill_item">
          <div className="skill__item_name">Figma</div>
          <img className="skill__item_icon" src={require('../../../assets/skill-icon/figma.svg')}
          alt="Figma icon"></img>
        </div>               
      </div>


    </div>



  )
}

export default Skill
