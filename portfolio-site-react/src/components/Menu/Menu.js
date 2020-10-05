import React, { Component } from "react";
import List from '../PageList/PageList.js';
import { Link } from 'react-scroll'

import "./Menu.css";


 
class Menu extends Component {
  // constructor(props) {}
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
          //  onMouseDown={this.props.handleMouseDown} 
           className={visibility}>

        <List 
          heading="This Page"
          item_1={
            <Link 
            activeClass="active" 
            className="page_list__item about_me" 
            // to={props.scrollTo}
            to="about_me" 
            spy={true} 
            smooth={true} 
            duration={500} 
            >                
                About Me              
            </Link>                   
          }
          item_2={
            <Link 
            activeClass="active" 
            className="page_list__item skill" 
            to="skill" 
            // to={props.scrollTo}
            spy={true} 
            smooth={true} 
            duration={500} 
            >                            
                Skill                          
            </Link>
          }
          item_3={
            <Link 
            activeClass="active" 
            className="page_list__item portfolio" 
            to="portfolio" 
            // to={props.scrollTo}
            spy={true} 
            smooth={true} 
            duration={500} 
            >                             
                Portfolio                       
            </Link>
          }
        />        
        
      </div>
    );
  }
}
 
export default Menu;