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
            <p>I'm a Front End Developer.</p>
            <p>I love creating things. So, I love coding.<br/>At the end of the day, coding is just a means for making our imagination into the reality.<br/>The excitement to create things pushes us foreward even in hard time in the process. <br/>Also, which makes us more imaginative.
            <br/>I feel passion to creating something close to our imagination.
            <br/>I want to develop products which are close to Your Imaginaiton. 
            <br/>I'm the develper who can share the excitement. Sincerly.</p>            
            <ul>
              <h2>More about me.</h2>
              <h2>I tressure time and productivity to get Maximum ROI in Minimum Exertion.</h2>
            {/* <p>I don't read books, but I think a lot and listent to talk by people who read books a lot.</p> */}
            <p>I take Three factors into consideration about Productivity. Focus, Deliberaiton, and Cognition.</p>
            <p>Focus: Focus is the matter of the direction of attention we put. It is said, we as human beings can focus attention to one thing for 2-4 hours a day and 4-5 days week at the Deepest Level. The work with Deepest Focus, so called Deep Work, is what I think the one of the most crucial factor for Productivity. That's why I work only 3 hours a day.</p>
            </ul>
            
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
