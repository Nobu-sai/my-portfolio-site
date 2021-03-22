import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

// Personal
import './PortfolioSelection.css';

//Child Components
import SkillTabs from './SkillTabs/SkillTabs'
// import Option from './Option/Option'
// import { setLogLevel } from 'firebase';

export default class Portfolioselection extends Component {
  constructor(props) {
    super(props)  

  }

  componentDidMount() { 
  }

  componentWillUnmount() {
  }

  componentDidUpdate() {
    // console.log(this.props.skills) 
  }

  portfolioSearchKeyHandler  = (skill) => {
    this.props.portfolioSearchKeyHandler(skill)
  }

  render() {
    const {
      portfolioSearchKeyHandler,       
      props: { 
        skills,       
      },    
    } = this;

    let skillTabs = "";
    skills.map((skill)=>{
      skillTabs += `${<div label={skill}></div>}` 
    })


    return (
      <div className="portfolio_selection">
          <div>
             <SkillTabs
              portfolioSearchKeyHandler={portfolioSearchKeyHandler} 
            > 
              <div label="All">                
              </div>              
              {
                skills.map((skill)=>(
                  // console.log(skill)
                  <div 
                    label={skill}
                    key={uuidv4()}
                    >                  
                  </div> 
                ))
              }
            </SkillTabs> 
            
           
          </div>          
      </div>
    )
  }
}
