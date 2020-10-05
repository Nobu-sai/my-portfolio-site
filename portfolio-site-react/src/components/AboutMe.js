import React from 'react'
// import ResumePDF from './ResumePDF/ResumePDF.js'
// import resumePDF from '../assets/resume.pdf';
import '../style/section.css';
import '../style/about_me.css';



function AboutMe(props) {
  return (    
     <div className="section" id="about_me">              
        <div className="section__heading_container">
          <div className="section__heading">
            About me
          </div>
        </div>
        
        <div className="section_contents about_me_contents">
          <div className="introduciton">    
            <div class="intro_message">            
              <div className="intro_message__heading"> I love creating things. <br/> So, I love coding.</div>                   
              <p className="intro_message__p">
                At the end, coding is a means for creating things <br/>as my great partner.<br/>
              I want to be your partner <br/> to make your imagination into the reality.</p>    
            </div>    

            <div className="profile_image"></div>   

          </div>
        
                                   
        </div>          

      </div>     
  )
}

export default AboutMe;
