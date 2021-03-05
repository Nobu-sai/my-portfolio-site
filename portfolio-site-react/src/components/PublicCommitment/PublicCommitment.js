import React, { Component } from 'react'

import './PublicCommitment.css';
import WeeklyDWTimeTotal from './WeeklyDWTimeTotal.js'

  
export default class PublicCommitment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visibilityClassName: "visible"
    }
    this.props = {
    }

  }  

  
  render() {
    return (
      <div>
        <div>
          <div className="weeklyDWTime__title">I've been focusing this week for...</div>
          <div className="weeklyDWTimeTotal">
            <WeeklyDWTimeTotal className="weeklyDWTime__item" />       
          </div>
        </div> 
        <div className="desc">
          <div className="desc_title">What do I count?</div>  
            <div className="desc_item">: The Deep Work time.</div>
          <div className="what_deep_work">
            <div className="desc_title">What is Deep Work Time?</div>  
              <div className="desc_item">: Only the time I can focus the most.</div>               
              </div>
          </div>
          <div className="why">
            <div className="desc_title">Why Deep Work?</div>  
            <div className="desc_item">: I think it is the BEST way for the MAXIMUM outcome.</div>
            <div className="desc_title">Why do I publich my record?</div>  
            <div className="desc_item">: To reinforce my commitment to what I need to do by trying to evade feeling shame if I could not follow to it.   
            </div>
          </div>      

       </div>      
    )
  }
}
