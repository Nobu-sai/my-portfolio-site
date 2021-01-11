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
      <div className="public_commitment_container">
        Weekly Deep Work Time: {this.state.weeklyDWTime}
       </div>      
    )
  }
}
