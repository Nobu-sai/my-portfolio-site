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
      
        <div className="profile_image"></div>   
          <div className="intro_heading"> I love <br/>coding, <br/>because <br/>I love <br/>creating.</div>             

          <div className="intro_message">
            At the end, <br/>coding is a way for creating things, <br/> which is my great partner.<br/>
          I want to be your partner, <br/> who helps making your imagination into the reality.</div>    
                                  
        
        </div>          

      </div>     
  )
}

export default AboutMe;
