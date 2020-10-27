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
            <div className="intro_heading"> Coding is <br/>my <br/><span class="yellow-marker">partner</span>.<br/>I want to be<br/>your <br/><span class="yellow-marker">partner</span>.</div>     
            <div className="profile_image"></div>   
          </div>
                

         <div className="intro_message">
         I love coding, because I love <span class="yellow-marker">creating</span>. <br/>
         At the end, <br/>coding is a way for creating things, <br/> and it is my great partner.<br/>
          I want to be your partner, <br/> who makes<span class="yellow-marker"> your imagination into the reality</span>.
         </div>    
                                
        
        </div>          

      </div>     
  )
}

export default AboutMe;
