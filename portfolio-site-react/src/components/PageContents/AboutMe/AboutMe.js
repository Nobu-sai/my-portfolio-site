import React from 'react'
// import Section from '../Section/Section.js';
import '../Section.css';
import './AboutMe.css';
import Heading from '../../Heading/Heading.js'



function AboutMe() {

  return (    
     <div className="section" id="about_me">              
        <Heading  content="About Me" />
        
        <div className="section_contents about_me_contents">
          <div className="upper_contents">            
            <div className="intro_heading"> Coding is <br/>my <br/>partner.<br/>I want to be<br/>your <br/>partner.</div>     
            <div className="profile_image"></div>   
          </div>
                

         <div className="intro_message">
         I love coding, because I love creating. <br/>
         At the end, <br/>coding is a way for creating things, <br/> and it is my great partner.<br/>
          I want to be your partner, <br/> who makes your imagination into the reality.
         </div>    
                                
        
        </div>          

      </div>     
  )
}

export default AboutMe;
