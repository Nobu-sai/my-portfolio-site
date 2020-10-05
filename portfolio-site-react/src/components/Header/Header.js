import React from 'react'
import './Header.css'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'



function Header() {
  return (
    <div className="header">
      <div className="header_messages">
        <div className="header__main_heading">Welcom.</div>
        <h2 className="header__sub_heading">I'm Nobuya Saito.</h2>
      </div>
      
      
      <div className="header_list">        
        
        <div className="header_list__heading">This Page</div>

        <div className="header_list__items">
          <div className="header_list__item">
            {/* <a href="#about_me">See about Me</a> */}
            <Link activeClass="active" className="about_me__scroll" to="about_me" spy={true} smooth={true} duration={500} >About Me</Link>

            <i className="fas fa-arrow-down scroll_down__icon"></i>
          </div>
          <div className="header_list__item">
            <a href="#skill">Skill</a>
            <i className="fas fa-arrow-down scroll_down__icon"></i>
          </div>
          <div className="header_list__item">
            <a href="#portfolio">ortfolio</a>
            <i className="fas fa-arrow-down scroll_down__icon"></i>
          </div>
          {/* <div className="header_list__item">
            <a href="#job_offer">Offer a Job</a>
            <i className="fas fa-arrow-down scroll_down__icon"></i>
          </div>  */}
        </div>        
        
        
      </div>  

    </div>
  
  )
}

export default Header
