import React from 'react'
// import ResumePDF from './ResumePDF/ResumePDF.js'
// import resumePDF from '../assets/resume.pdf';
import '../style/section.css';
import '../style/about_me.css';



function AboutMe(props) {
  return (
    <div className="section_bg about_me_bg">

     <div className="section" id="about_me">      
        <div className="section__heading_container">
          <h1 className="section__heading">About me</h1>
        </div>
        
        <div className="section_contents about_me_contents">
          <div className="introduciton">
          <div className="profile_image"></div>
            <h2 className="about_me__h2">I'm Nobuya Saito</h2>                        
            <p>I'm a Web Developer.</p>
            <p>I Love Creating things. So, I Love Coding.<br/>At the end of the day, Coding is a Means for Creating things as my great Partner.<br/>
            I Want to be Your Partner to make Your Imagination into the Reality.</p>                                                  
          </div>
          
          <div className="contact">
            <h2 className="about_me__h2">Contact Me</h2>
            <p className="contact__item"><a href="mail: snz0901@gmail.com">Email</a></p>            
            <p className="contact__item"><a href="https://github.com/Nobu-sai">GitHub</a></p>     
            <p className="contact__item"><a href="https://www.linkedin.com/in/nobuya-saito-3711721b7/">LinkedIn</a></p>     
            <div className="contact__item">                   
              {/* <ResumePDF pdf={resumePDF} />               */}
              {/* <ResumePDF />   */}
              {props.link_2}
            </div>            
              
          </div>
        </div>
        <p className="image_source">
        <a href="https://images.unsplash.com/photo-1465809873722-b4bf7208d2b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=942&q=80">Image Source</a>
      </p>          

      </div>   


     </div>  
  
  )
}

export default AboutMe;
