import React from 'react'

import '../Section.css';
import './About.css';
import Heading from '../../Heading/Heading.js'
import PublicCommitment from '../../PublicCommitment/PublicCommitment';



// function About({public_commitment}) {
export default class About extends React.Component {
    
  constructor(props) {
    super(props)
    this.props = {
      public_commitment: null,
    }

  }

  render() {

    return (    
     <div className="section" id="about">              
        <Heading  content="About" />
        
        <div className="section_contents about_contents">
          <div className="upper_contents">            
            <div className="intro_heading"> Coding is <br/>my <br/><span className="yellow_marker">partner</span>.<br/>I want to be<br/>your <br/><span className="yellow_marker">partner</span>.</div>     
            <div className="profile_image"></div>   
          </div>
                

         <div className="intro_message">
         I love <span className="yellow_marker">coding</span>, because I love <span className="green_marker">creating</span>. <br/>
         At the end, <br/>coding is <span className="yellow_marker">a helpful way</span><br/>for <span className="green_marker">creating what I want</span>, <br/> and it is my great partner.<br/>
          I want to be your partner,<br/><span className="yellow_marker">who stays with you</span> <br/>to <span className="green_marker">make the real closer to your ideal</span>.
         </div>    

         {/* <div>Record (Only me is authenticated.): {this.props.public_commitment}</div>         */}
         <PublicCommitment />
          {/* <div className="pc-desc">
            <h2>What do I count?</h2>  
            <div>: Deep Work Time for 10 hours per week.</div>
            <div className="what_deep_word">
              <h2>What is Deep Work Time?</h2>  
                <div>
                  : ONLY in Deep Work Time (*1) in Deep Work Days (*2).         
                  C: Just too much restriction.
                  P: Including SW, makes me COMMIT Less. 
                </div>
                <div>
                  : What is PLANED BEFOREHAND as Daily Tasks 
                </div> 
                  : What is done within VALID System or Process.
                </div> 
                <div>
                  *1 (Deep Work Time)
                  = ONLY Tasks done in  Deep Work Space .
                  = ONLY Tasks done in  Deep Work Task Chunk  in my  Daily Schedule .
                  = ONLY AFTER  Deep Work Ritual Task Chunk .
                </div>
                <div>
                  *2 (Deep Work Days)
                  = 3-4 Hours a Day for 4-5 Days a Week.
                </div>
            </div>
            <div className="why">
              <h2>Why do I publich my Counts?</h2>  
              <div>
              : To Force myself to COMMIT to what I NEED to do by Trying to Evade from DEGRADING my PRIDE to YOU when I COULD NOT Follow to it.   
              </div>
           </div>       */}

        </div>
                                  
        
      </div>           
      
  )
  }
}

// export default About;
