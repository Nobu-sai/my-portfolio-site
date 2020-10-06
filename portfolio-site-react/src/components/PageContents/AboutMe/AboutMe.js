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
          <div className="introduciton">    
            <div class="intro_message">            
              <div className="intro_message__heading"> I love creating things, <br/> because I love coding.</div>                   
              <p className="intro_message__p">
                At the end, <br/>coding is a way for creating things, <br/> therefore it is my great partner.<br/>
              I want to be your partner, <br/> for making your  imagination into the reality.</p>    
            </div>    

            <div className="profile_image"></div>   

          </div>
        
                                   
        </div>          

      </div>     
  )
}

export default AboutMe;
