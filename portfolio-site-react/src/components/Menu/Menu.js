import React, { Component } from "react";
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll'

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

        <div className="menu_list">        
          
          <div className="menu_list__heading">This Page</div>          

          <div className="menu_list__items">
            <div className="menu_list__item about_me">
              <Link 
                activeClass="active" 
                className="scroll_about_me scroll" 
                // to={props.scrollTo}
                to="about_me" 
                spy={true} 
                smooth={true} 
                duration={500} 
              >
                About Me
              </Link>              
            </div>

            <div className="menu_list__item skill">            
              <Link 
                activeClass="active" 
                className="scroll_skill scroll" 
                to="skill" 
                // to={props.scrollTo}
                spy={true} 
                smooth={true} 
                duration={500} 
              >              
              Skill               
              </Link>
              
            </div>
            <div className="menu_list__item portfolio">          
              <Link 
                activeClass="active" 
                className="scroll_portfolio scroll" 
                to="portfolio" 
                // to={props.scrollTo}
                spy={true} 
                smooth={true} 
                duration={500} 
              >             
              Portfolio   
              </Link>
                        
            </div>                  
          </div>  
                
        </div>    
{/* 
        
        <div class="close" onClick={this.props.handleMouseDown}>Click to Close.</div> 
         */}
           
        
      </div>
    );
  }
}
 
export default Menu;