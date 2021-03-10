import React, { Component } from 'react'
import "./Option.css" 


export default class Option extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }

    this.setOption = this.setOption.bind(this)
  }

  componentDidMount() {
  }


  componentDidUpdate() {
    // console.log(this.props.category)
  }

  componentWillUnmount() {
    
  }

  // Prototype methods, Bind in Constructor (ES2015)
  setOption = (event) => {
    console.log(event.target.innerHTML)
    return this.props.portfolioOptionHandler(event.target)
  }

  // Class Properties (Stage 3 Proposal)
  handler = () => { this.setState() }

  render() {    
    return (
      <div>
        <div className="options">
          {
            this.props.category == "All" && 
              <div className="all_options">
                
              </div>  
          
          }

          {
            this.props.category == "Skills" && 
            <div className="skills_options option_list" >
              <div className="sort_title">Search Options</div>
              <div className="option" onClick={this.setOption}>SKILL</div>          
              <div className="option" onClick={this.setOption}>SKILL</div>          
              <div className="option" onClick={this.setOption}>SKILL</div>          
              <div className="option" onClick={this.setOption}>SKILL</div>          
            </div>  
          }

          {
            this.props.category == "Date" && 
            <div className="date_options option_list">
              <div className="sort_title">Search Options</div>
              <div className="option" onClick={this.setOption}>Latest</div>          
              <div className="option" onClick={this.setOption}>Oldet</div>          
            </div>  
            }

          {
            this.props.category == "Recommendation" && 
            <div className="recommendation_options option_list">
              <div className="sort_title">Search Options</div>
                <div className="option" onClick={this.setOption}>Savvy</div>          
                <div className="option" onClick={this.setOption}>Funny</div>          
                <div className="option" onClick={this.setOption}>Ugly</div>          
              </div>  
          }

        </div>
      </div>
    )
  }
}
