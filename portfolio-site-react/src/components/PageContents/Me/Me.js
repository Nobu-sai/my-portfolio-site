import React from 'react'

import '../Section.css';
import './Me.css';
import Heading from '../../Heading/Heading.js'



// function About({public_commitment}) {
export default class Me extends React.Component {
    
  constructor(props) {
    super(props)
    this.props = {
      public_commitment: null,
    }

  }

  render() {

    return (    
     <div className="section" id="me">              
        <Heading  content="Me" />
        
        <div className="section_contents about_contents">
          <div className="messages">

            <div className="upper_contents">            
              <div className="intro_heading"> Coding is <br/>my <br/><span className="yellow_marker">partner</span>.<br/>I want to be<br/>your <br/><span className="yellow_marker">partner</span>.</div>     
              <div className="profile_image"></div>   
            </div>
                  

            <div className="intro_message">
            I love <span className="yellow_marker">coding</span>, because I love <span className="green_marker">creating</span>. <br/>
            At the end, <br/>coding is <span className="yellow_marker">a helpful way</span><br/>for <span className="green_marker">creating what I want</span>, <br/> and it is my great <span className="yellow_marker">partner</span>.<br/>
              I want to be your <span className="yellow_marker">partner</span>,<br/><span className="yellow_marker">who stays with you</span> <br/>to <span className="green_marker">make the real closer to your ideal</span>.
            </div>    

          </div>
        </div>

      </div>           
      
  )
  }
}

// export default About;
