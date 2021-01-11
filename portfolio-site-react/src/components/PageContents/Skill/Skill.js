import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import Heading from '../../Heading/Heading.js'
import SkillItem from './SkillItem.js'
import '../Section.css';
import './Skill.css';



import { defaultDB } from '../../../firebase.js';


function Skill() {
  const [skills, setSkills] = useState([]);

  useEffect(()=>{
    getSkill();
  }, [])

  const getSkill = () => {
    defaultDB.collection('skill').onSnapshot((snapshot)=>{      
      setSkills(snapshot.docs.map((doc)=> doc.data() ))
      })
  }


  return (

    <div className="section" id="skill">
      <Heading  content="Skill" />
      {/* <button onClick={Skill}>Add skill</button> */}
      <div className="section_contents skill_contents">        
      {skills.length > 1 && skills.map((skill)=>(

        <SkillItem skillName={skill.name} key={uuidv4()}/>          
               
      ))} 
               

      </div>
    </div>



  )
}

export default Skill
