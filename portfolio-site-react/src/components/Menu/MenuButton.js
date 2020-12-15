import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  constructor(props) {
    super(props)    
    this.state = {
      buttonVisibility: 'hidden'
    }    
  }
  
  toggleButtonVisibility() {
    this.setState({
      buttonVisibility: 'visible'
    })
  }

  componentDidMount() {    
    setTimeout(() => 
      this.toggleButtonVisibility()    
      , 3600)
  }
    

  render() {  
  
    return (
      <button 
        id="roundButton"
        className={this.state.buttonVisibility}
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}
export default MenuButton;