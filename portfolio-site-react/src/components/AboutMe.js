import React from 'react'
import '../style/section.css';
import '../style/about_me.css';

function aboutMe() {
  return (
    <div className="section_bg about_me_bg">

     <div className="section" id="about_me">      
        <div className="section__heading_container">
          <h1 className="section__heading">About me</h1>
        </div>
        
        <div className="section_contents about_me_contents">
          <div className="introduciton">
            <h2 className="about_me__h2">I'm Nobuya Saito</h2>            
            <p>I love creating things. So, I love coding.<br/>At the end of the day, coding is just a means for making our imagination into the reality. <br/>Which I feel excited. <br/>The excitement pushes us foreward even in hard time in the process. <br/>Also, which makes us more imaginative.<br/>I'm the develper who can share the excitement. </p>            
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
            <p className="contact__item"><a href="#">Email</a></p>
            <p className="contact__item"><a href="#">LinkedIn</a></p>     
            <p className="contact__item"><a href="https://github.com/Nobu-sai">GitHub</a></p>     
          </div>
        </div>
      </div>   

     </div>  
  
  )
}

export default aboutMe;
