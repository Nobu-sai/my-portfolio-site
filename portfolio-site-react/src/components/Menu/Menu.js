import React, { Component } from "react";
import PageList from '../PageList/PageList.js';
import { Link } from 'react-scroll'

import "./Menu.css";

 
class Menu extends Component {
  render() {
    var visibility = "hide";
 
    if (this.props.menuVisibility) {
      visibility = "show";
    }
 
    return (
      <div id="flyoutMenu"
          //  onMouseDown={this.props.handleMouseDown} 
           className={visibility}
      >        
        <PageList 
          heading="This Page"
          item_1={
            <Link 
            activeClass="active" 
            className="page_list__item me" 
            // to={props.scrollTo}
            to="me" 
            spy={true} 
            smooth={true} 
            duration={500} 
            >                
                <div className="page_list__item_name">Me</div>             
            </Link>                   
          }
          item_2={
            <Link 
            activeClass="active" 
            className="page_list__item portfolio" 
            to="portfolio" 
            // to={props.scrollTo}
            spy={true} 
            smooth={true} 
            duration={500} 
            >                             
             <div className="page_list__item_name">Portfolio</div>                       
            </Link>
          }
          item_3={
            <Link 
            activeClass="active" 
            className="page_list__item information" 
            to="information" 
            // to={props.scrollTo}
            spy={true} 
            smooth={true} 
            duration={500} 
            >                            
             <div className="page_list__item_name">Info</div>                                   
            </Link>
          }
        />        
        
      </div>
    );
  }
}
 
export default Menu;