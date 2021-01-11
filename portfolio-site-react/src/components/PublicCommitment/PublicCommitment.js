import React, { Component } from 'react'
import { commitmentRecordDB } from '../../firebase.js';

import './PublicCommitment.css';

  
export default class PublicCommitment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weeklyDWTime: 0,
    }
    this.props = {
    }

  }  

  componentDidMount() {
    this.getCommitments()
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
  
  render() {
    return (
      <div>
        <div className="weeklyDWtime">
          I'm focusing for <span className="DWtime">{this.state.weeklyDWTime}</span> hours this week.
        </div> 
        <div className="desc">
          <div className="desc_title">What do I count?</div>  
            <div className="desc_item">: Deep Work Time for 10 hours per week.</div>
          <div className="what_deep_work">
            <div className="desc_title">What is Deep Work Time?</div>  
              <div className="desc_item">: ONLY in work in the Deep Work Time (*1) in Deep Work Days (*2).</div>
              <div className="desc_item">: What is PLANED the day before.</div> 
              <div className="desc_item">: What is done within VALID System or Process.</div>  
              </div> 
              <div className="annotation">
                <div className="desc_item">*1 (Deep Work Time)</div>
                <div className="desc_item">= 3-4 hours a day when I can focus at the DEEPEST level.</div> 
                <div className="desc_item">= ONLY Tasks done in a place ONLY for Deep Work (Deep Work Space).</div>
                <div className="desc_item">= ONLY AFTER Deep Work Ritual (Cold Shower and Meditation).</div>
                <div className="desc_item">*2 (Deep Work Days)</div>
                <div className="desc_item">= The day I can focus at the DEEPEST level.</div> 
                <div className="desc_item">= 4-5 Days a week.</div>
              </div>
          </div>
          <div className="why">
            <div className="desc_title">Why do I publich my record?</div>  
            <div className="desc_item">: To force myself to COMMIT to what I NEED to do by trying to evade from DEGRADING my PRIDE to YOU when I COULD NOT follow to it.   
            </div>
          </div>      

       </div>      
    )
  }
}
