import React from 'react'
import '../style/section.css';
import '../style/job-offer.css';

function JobOffer() {
  return (
    <div className="section" id="job_offer">
        <h1 className="section__heading">Job Offer</h1>
        <div className="section_contents">
          <div className="job_message">
            <div>
              Let me make your imaginaiton into reality.
            </div>
          </div>
          <div className="job_form">
            <form action="">
              <input type="text"></input>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </form>
          </div>      
        </div>
    </div>    
  )
}

export default JobOffer
