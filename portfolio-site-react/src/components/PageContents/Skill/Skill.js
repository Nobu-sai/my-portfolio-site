import React, { useEffect, useState } from 'react'
import Heading from '../../Heading/Heading.js'
import SkillItem from './SkillItem.js'
import '../Section.css';
import './Skill.css';


import { db } from '../../../firebase.js';


function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    getSkill();
  }, [])

  const getSkill = () => {
    db.collection('skill').onSnapshot((snapshot)=>{
      console.log("...When: React is going to read  setSkills Method, so it Will Render the return()")
      setSkills(snapshot.docs.map((doc)=> doc.data() ))
      // snapshot.forEach((doc)=>setState([...skills, doc.data()]))
      })
  }


  return (

    <div className="section" id="skill">
      <Heading  content="Skill" />
      <button onClick={Skill}>Add skill</button>
      <div className="section_contents skill_contents">     
      {skills && console.log(skills)}
      {skills && console.log("* What: skills State")}
      {skills && console.log("* Where: Inside return()")}
      {skills.length > 1 && console.log(skills[0].logo)}
      {skills.length > 1  && console.log("* What: skills[0].logo")}
      {skills.length > 1  && console.log("* Where: INSIDE return()")}
      {skills.length > 1  && console.log("* When: BEFORE map()")}
      {skills.length > 1 && skills.map((skill)=>(

        <SkillItem skillName={skill.name} />
        // <div className="skill_item">
        // <div className="skill__item_name">{skill.name}</div>
        //   <div className="skill__item_icon"             
        //     style={{
        //       // background: `url(${require("../../../assets/skill-icon/javascript.svg")})`,
        //       // Copied Path from Firestore.
        //         // => CAN be accessed. 
        //       // background: `url(${require("../../../assets/skill-icon/javascript.svg")})`,
        //       // Copied Path from logged path in Chrome/Console.
        //         // => CAN be accessed.   
        //       background: `url(${require(skill.logo)})`,
        //       backgroundPosition: "center",              
        //       backgroundRepeat: "no-repeat",
        //       backgroundSize: "contain",
        //     }}>
        //   </div>                  
        // </div>          

               
      ))} 
      
        
        {/* <div className="skill_item">
          <div className="skill__item_name">HTML</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/html5.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>              
        </div> */}
        {/* <div className="skill_item">
          <div className="skill__item_name">CSS</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/css3.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>              
            </div>
        </div>     */}
        {/* <div className="skill_item">
          <div className="skill__item_name">Bootstrap</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/bootstrap.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>      
        </div> */}
        {/* <div className="skill_item">
          <div className="skill__item_name">JavaScript</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/javascript.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>     
        </div>   */}
        {/* <div className="skill_item">
          <div className="skill__item_name">React.js</div>
          <div className="skill__item_icon"             
          style={{
              background: `url(${require('../../../assets/skill-icon/reactjs.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>              
          </div>
        </div>                       */}
        {/* <div className="skill_item">
          <div className="skill__item_name">Node.js</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/nodejs.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}></div>
        </div> */}
        {/* <div className="skill_item">
          <div className="skill__item_name">Express.js</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/expressjs.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
           </div>   
        </div> */}
        {/* <div className="skill_item">
          <div className="skill__item_name">Firebase</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/firebase.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>              
          </div>
        </div>     */}
        {/* <div className="skill_item">
          <div className="skill__item_name">MongoDB</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/mongodb.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>    
        </div>      */}
        {/* <div className="skill_item">
          <div className="skill__item_name">Figma</div>
          <div className="skill__item_icon"             
            style={{
              background: `url(${require('../../../assets/skill-icon/figma.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
           </div>   
        </div>       */}

        {/* <div className="skill_item">
          <div className="skill__item_name">Postman</div>
          <div className="skill__item_icon" 
            style={{
              background: `url(${require('../../../assets/skill-icon/postman.png')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>              
          </div>
        </div>       */}

        {/* <div className="skill_item">
          <div className="skill__item_name">Storybook.js</div>
          <div className="skill__item_icon" 
            style={{              
              background: `url(${require('../../../assets/skill-icon/storybook.svg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>                
        </div>   */}
        {/* <div className="skill_item">
          <div className="skill__item_name">Flexbox</div>
          <div 
            className="skill__item_icon flexbox-icon" 
            style={{              
              background: `url(${require('../../../assets/skill-icon/flexbox.jpg')})`,
              backgroundPosition: "center",              
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}>
          </div>                
        </div>   */}

      </div>
    </div>



  )
}

export default Skill
