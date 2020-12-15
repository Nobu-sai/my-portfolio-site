import React, { Component } from "react";
import './MenuButton.css';
 
class MenuButton extends Component {
  render() {
    var buttonVisibility = 'hidden';
    setTimeout(()=> {buttonVisibility = !buttonVisibility}, 1000)

    return (
      <button 
        id="roundButton"
        className={buttonVisibility}
        onMouseDown={this.props.handleMouseDown}
      ></button>
    );
  }
}
 
export default MenuButton;