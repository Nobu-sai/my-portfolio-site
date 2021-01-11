import React, { Component } from 'react'
import { commitmentRecordDB } from './commitment-record-firebase.js';

import './PublicCommitment.css';

console.log(commitmentRecordDB.collection('commitment-record').doc().get())
  
export default class PublicCommitment extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.props = {
    }


  }  

  
  render() {
    return (
      <div className="public_commitment_container">

       </div>      
    )
  }
}
