import React from 'react'
// import Section from '../Section/Section.js';
import '../Section.css';
import './About.css';
import Heading from '../../Heading/Heading.js'



function About() {

  return (    
     <div className="section" id="about">              
        <Heading  content="About" />
        
        <div className="section_contents about_contents">
          <div className="upper_contents">            
            <div className="intro_heading"> Coding is <br/>my <br/><span class="yellow_marker">partner</span>.<br/>I want to be<br/>your <br/><span class="yellow_marker">partner</span>.</div>     
            <div className="profile_image"></div>   
          </div>
                

         <div className="intro_message">
         I love <span class="yellow_marker">coding</span>, because I love <span class="green_marker">creating</span>. <br/>
         At the end, <br/>coding is <span class="yellow_marker">a helpful way</span><br/>for <span class="green_marker">creating what I want</span>, <br/> and it is my great partner.<br/>
          I want to be your partner,<br/><span class="yellow_marker">who stays with you</span> <br/>to <span class="green_marker">realize what you want</span>.
         </div>    
                                
        
        </div>          

      </div>     
  )
}

export default About;
