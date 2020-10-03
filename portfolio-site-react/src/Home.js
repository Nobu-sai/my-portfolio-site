import React from 'react';
import {Element, animateScroll as scroll } from 'react-scroll'
import Typist from 'react-typist';
import Typical from 'react-typical'

import AboutMe from './components/AboutMe.js';
import Skill from './components/Skill.js';
// import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import MenuContainer from "./components/Menu/MenuContainer.js";

import './Home.css'
import './style/header.css'






function Home({link_1}) {
  // Scroll
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  let typeDone = false;
  
  const typeHander = () => {
    typeDone = true;
  }

  return (
    <div className="Home">                          
     
    
     <MenuContainer />

    {/* <Header />                */}


    <div className="header">
      <Typist      
        className="header__main_heading"
        startDelay={200}                  
        cursor={
          {
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 100,
          }
        }
      >
        Welcom.
      </Typist>
  
      <Typist      
        className="header_message"      
        startDelay={700}
        cursor={
          {
            show: true,
            blink: true,
            element: '|',
            hideWhenDone: true,
            hideWhenDoneDelay: 100,
          }
        }
      >
        <p>I'm Nobuya Saito. <br/>A Web Developer. </p> 
      </Typist>
          
    </div>  
    
    <Element name="about_me">
      <AboutMe 
      link_2={link_1}      
      className="section_container"/>
 
    </Element>        
    
    <Element name="skill" className="section_container">
      <Skill />
    </Element>


    <Element name="portfolio" className="section_container">
      <Portfolio />  
    </Element>                   
          
 

    <div className="footer">
      <div className="footer__heading_container">
        <Typical 
          className="footer__heading"
          steps={['Are you leaving?', 1000, 'Thanks for visiting!', 1000, 'What will you do next?', 1000, 'See you. Have a good day!', 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </div>      
        
      <div className="footer__item">
        <div className="image_source__heading">Image Source</div>

        <div className="image_source__items">
          <a className="image_source__item about_me" href="https://images.unsplash.com/photo-1465809873722-b4bf7208d2b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=942&q=80">About Me</a>
          
          
          <a className="image_source__item skill" href="https://images.unsplash.com/photo-1475873326779-99eac8da25b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80">Skill </a>
          <a className="image_source__item portfolio" href="https://images.unsplash.com/photo-1529444161959-5690000911bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">Portfolio</a>    
        </div>
                
      
      </div>
  
        
    
     
      
    </div>       
     
        
    
          
    <div className="scroll_up">
      <i className="fas fa-arrow-down scroll_up__icon fa-flip-vertical" onClick={scrollToTop}></i>
      Top
    </div>

  </div>
  );
}

export default Home;
