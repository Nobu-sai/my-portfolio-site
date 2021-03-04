import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      buttonVisibility: 'hidden'
    }    

    this.toggleButtonVisibility = this.toggleButtonVisibility.bind(this)
  }
  
  toggleButtonVisibility() {
    if(this.state.buttonVisibility == "hidden") {
      this.setState({
        buttonVisibility: 'visible'
      })
    } else {
      this.setState({
        buttonVisibility: 'hidden'
      }) 
    } 

  }


  componentDidMount() {    
    setTimeout(() => 
      this.toggleButtonVisibility()    
      , 3600)
  }
    

  render() {  
  
    return (
      <div
        id="roundButton"
        className={this.state.buttonVisibility}
        onMouseDown={this.props.handleMouseDown}
        onClick={this.toggleButtonVisibility}
      ></div>
    );
  }
}
export default MenuButton;