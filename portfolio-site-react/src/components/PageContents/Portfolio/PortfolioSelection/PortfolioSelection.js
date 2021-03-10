import React, { Component } from 'react'
import './PortfolioSelection.css';

//Child Components
import SkillTabs from './SkillTabs/SkillTabs'
import Option from './Option/Option'
import { setLogLevel } from 'firebase';

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

    // console.log(skillTabs)

    return (
      <div className="portfolio_selection">
          <div>
            {/* <div>Search Categories</div> */}
             <SkillTabs
              portfolioSearchKeyHander={portfolioSearchKeyHander} 
            > 
  
              <div label="All">                
              </div>              
              <div label="HTML">                
              </div>              
              {/* {skillTabs} */}
              {
                skills.map((skill)=>(
                  // console.log(skill)
                  <div label={skill}>                  
                  </div>
                ))
              }
{/* 
              <div label="All">                 
              </div> 
              <div label="Skills">                                 
              </div> 
              <div label="Date">                                 
              </div> 
              <div label="Recommendation">                 
              </div>  */}
            </SkillTabs> 
            
           
          </div>          
      </div>
    )
  }
}
