import React, { Component } from 'react'
import { commitmentRecordDB } from '../../firebase.js';

import './PublicCommitment.css';

  
export default class PublicCommitment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weeklyDWTime: 0,
      visibilityClassName: "visible"
    }
    this.props = {
    }

  }  

  componentDidMount() {
    this.getCommitments()
    this.handleTimeVisibility()
  }

  getCommitments() {
    let documents = []
      commitmentRecordDB.collection('commitment-record').onSnapshot((snapshot)=>{
        snapshot.forEach((doc)=> {
            // console.log(doc.data())
            documents.push(doc.data())
          }
        )
        // console.log(documents)  
        this.updateWeeklyDWTime(documents)
      })
  }

  updateWeeklyDWTime(documents) {    
    let weeklyDWTime = 0;
    console.log(documents)
    documents.map((doc) => {
      // console.log(doc['DW Time'])
      weeklyDWTime += doc['DW Time']
    })

    console.log(weeklyDWTime)
    this.setState({
      weeklyDWTime: weeklyDWTime
    })
  }

  handleTimeVisibility() {
    setInterval(()=>{
      if(this.state.visibilityClassName == "visible") {
        this.setState({
          // visible:  false,
          visibilityClassName: "invisible"
        })
        console.log(this.state.visibilityClassName)
      } else {
        this.setState({
          // visible: true,
          visibilityClassName: "visible"
        })
      }
    }, 500)
  }

  
  render() {
    return (
      <div>
        <div className="weeklyDWtime">
          Weekly focusing time <span className={`DWtime ${this.state.visibilityClassName}`}>{this.state.weeklyDWTime}</span> / 10:00 hours.
        </div> 
        <div className="desc">
          <div className="desc_title">What do I count?</div>  
            <div className="desc_item">: The Deep Work time.</div>
          <div className="what_deep_work">
            <div className="desc_title">What is Deep Work Time?</div>  
              <div className="desc_item">: Only work in the Deep Work time (*1) in Deep Work days (*2).</div>
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
                <div className="desc_item">= Only 4-5 Days a week.</div>
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
