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
            <WeeklyDWTimeTotal />       
          </div>
        </div> 
        <div className="desc">
          <div className="desc_title">What do I count?</div>  
            <div className="desc_item">: The Deep Work time.</div>
          <div className="what_deep_work">
            <div className="desc_title">What is Deep Work Time?</div>  
              <div className="desc_item">: Only I can focus.</div> 
              {/* <div className="desc_item">: Only work in the Deep Work time (*1) in Deep Work days (*2).</div>
              <div className="desc_item">: Only what is PLANED the day before.</div> 
              <div className="desc_item">: Only what is done within VALID System or Process.</div>  
              </div> 
              <div className="annotation">
                <div className="desc_item">*1 (Deep Work Time)</div>
                <div className="desc_item">= Only 3-4 hours a day when I can focus at the DEEPEST level.</div> 
                <div className="desc_item">= Only 3-4 hours a day when I can focus at the DEEPEST level.</div> 
                <div className="desc_item">= Only Tasks done in a place ONLY for Deep Work (Deep Work Space).</div>
                <div className="desc_item">= Only AFTER Deep Work Ritual (Cold Shower and Meditation).</div>
                <div className="desc_item">*2 (Deep Work Days)</div>
                <div className="desc_item">= Only the day I can focus at the DEEPEST level.</div> 
                <div className="desc_item">= Only 4-5 Days a week.</div> */}
              </div>
          </div>
          <div className="why">
            <div className="desc_title">Why Deep Work?</div>  
            <div className="desc_item">: I think it is the BEST way for the MAXIMUM outcome.</div>
            <div className="desc_title">Why do I publich my record?</div>  
            <div className="desc_item">: To reinforce my commitment to what I need to do by trying to evade feel of shame if I could not follow to it.   
            </div>
          </div>      

       </div>      
    )
  }
}
