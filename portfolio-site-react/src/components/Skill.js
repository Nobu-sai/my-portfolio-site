import React from 'react'
import '../style/section.css';
import '../style/skill.css';
import htmlIcon from '../assets/skill-icon/html5.svg';
import cssIcon from '../assets/skill-icon/css3.svg';
import bootstrapIcon from '../assets/skill-icon/bootstrap.svg';
import jsIcon from '../assets/skill-icon/js.svg';
import reactjsIcon from '../assets/skill-icon/reactjs.svg';
import nodejsIcon from '../assets/skill-icon/nodejs.svg';
import expressjsIcon from '../assets/skill-icon/expressjs.svg';
import firebaseIcon from '../assets/skill-icon/firebase.svg';
import mongodbIcon from '../assets/skill-icon/mongodb.svg';
import figmaIcon from '../assets/skill-icon/figma.svg';



function Skill() {
  return (

    <div className="section" id="skill">
      <div className="section__heading_container">
        <div className="section__heading">Skill</div>
      </div>
      
      <div className="section_contents skill_contents">                        
        <div className="skill_item">
          <div class="skill__item_name">HTML</div>
          <img class="skill__item_icon" src={htmlIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">CSS</div>
          <img class="skill__item_icon" src={cssIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">Bootstrap</div>
          <img class="skill__item_icon" src={bootstrapIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">JavaScript</div>
          <img class="skill__item_icon" src={jsIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">React.js</div>
          <img class="skill__item_icon" src={reactjsIcon}></img>
        </div>            
        <div className="skill_item">
          <div class="skill__item_name">Node.js</div>
          <img class="skill__item_icon" src={nodejsIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">Express.js</div>
          <img class="skill__item_icon" src={expressjsIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">Firebase</div>
          <img class="skill__item_icon" src={firebaseIcon}></img>
        </div>
        <div className="skill_item">
          <div class="skill__item_name">MongoDB</div>
          <img class="skill__item_icon" src={mongodbIcon}></img>
        </div>     
        <div className="skill_item">
          <div class="skill__item_name">Figma</div>
          <div className="coming_soon">* Coming Soon</div>
          <img class="skill__item_icon" src={figmaIcon}></img>
        </div>               
      </div>


    </div>



  )
}

export default Skill
