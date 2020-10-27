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
      })
  }


  return (

    <div className="section" id="skill">
      <Heading  content="Skill" />
      <button onClick={Skill}>Add skill</button>
      <div className="section_contents skill_contents">        
      {skills.length > 1 && skills.map((skill)=>(

        <SkillItem skillName={skill.name} />          
               
      ))} 
               

      </div>
    </div>



  )
}

export default Skill
