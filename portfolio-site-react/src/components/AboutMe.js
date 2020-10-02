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
              <div className="intro_message__heading"> I Love Creating things. <br/> So, I Love Coding.</div>      
              {/* <p classname="intro_message__p">
                At the end of the day, Coding is a Means for Creating things as my great Partner.
              I Want to be Your Partner to make Your Imagination into the Reality.</p>                      */}
              <p className="intro_message__p">
                At the end of the day, Coding is a Means <br/> for Creating things as my great Partner.<br/>
              I Want to be Your Partner <br/> to make Your Imagination into the Reality.</p>    
            </div>            
            <div className="profile_image"></div>                                  
          </div>
          
        <div className="contact">                            
          <a className="contact__item mail" href="mail: snz0901@gmail.com">
            <div class="contact__item_name">Email</div>
            <i class="far fa-envelope"></i>
          </a>       

          <a className="contact__item github" href="https://github.com/Nobu-sai">
            <div class="contact__item_name">GitHub</div>
            <i class="fab fa-github-square"></i>
          </a>  

          <a className="contact__item linkedin" href="https://www.linkedin.com/in/nobuya-saito-3711721b7/">
             <div class="contact__item_name">LinkedIn</div>
             <i class="fab fa-linkedin"></i>
          </a>

          <a className="contact__item">             
            <div class="contact__item_name resume">{props.link_2}</div>
            <i class="far fa-file-alt"></i>
          </a>                                      
        </div>     
                                   
        </div>          

      </div>     
  )
}

export default AboutMe;
