import React, { Component } from 'react'
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

  portfolioSearchKeyHander  = (skill) => {
    this.props.portfolioSearchKeyHander(skill)
  }

  render() {
    const {
      portfolioSearchKeyHander,       
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
              portfolioSearchKeyHander={portfolioSearchKeyHander} 
            > 
              <div label="All">                
              </div>              
              {
                skills.map((skill)=>(
                  // console.log(skill)
                  <div label={skill}>                  
                  </div> 
                ))
              }
            </SkillTabs> 
            
           
          </div>          
      </div>
    )
  }
}
