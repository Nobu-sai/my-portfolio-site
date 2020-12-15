import React, { Component } from "react";

import './MenuContainer.css'
import MenuButton from './MenuButton';
import Menu from './Menu.js'


class MenuContainer extends Component {
  constructor(props, context) {
    super(props, context);
   
    this.state = {
      visible: false,
      // visible: true
    };
   
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMouseDown(e) {
    this.toggleMenu();
 
    console.log("clicked");
    // e.stopPropagation();
  }

   
  toggleMenu() {
    this.setState({
        visible: !this.state.visible
    });
  }

  componentDidMount() {
    
    // setInterval(() => this.toggleMenu(), 3500)
    setTimeout(() => this.toggleMenu(), 3500)

  }

  render() {

    return (
      <div className="menu_container">
        <MenuButton 
          handleMouseDown={this.handleMouseDown}
        />
        <Menu 
          handleMouseDown={this.handleMouseDown}
          menuVisibility={this.state.visible} 
        />
      </div>
    );
  }
}
 
export default MenuContainer;