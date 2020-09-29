import React from 'react';
import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll'

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

  return (
    <div className="App">                          
     
    
    <MenuContainer />                    

    {/* <Header />                */}

    <div className="header">
      <div className="header_messages">
        <div className="header__main_heading">Welcom.</div>
        {/* <h2 className="header__sub_heading">I'm Nobuya Saito.</h2> */}
      </div>
    </div>  
    
    <Element name="about_me">
      <AboutMe link_2={link_1} />
      {/* <AboutMe /> */}
    </Element>        
    
    <Element name="skill">
      <Skill />
    </Element>


    <Element name="portfolio">
      <Portfolio />  
    </Element>                   
          
    {/* <ScrollUp /> */}

    <footer>           
        <p className="footer__item"><a href="email: snz0901@gmail.com">Email</a></p>
        <p className="footer__item"><a href="https://www.linkedin.com/in/nobuya-saito-3711721b7/">LinkedIn</a></p>     
        <p className="footer__item"><a href="https://github.com/Nobu-sai">GitHub</a></p>     
        
      
        
    </footer>
          
    <div className="scroll_up">
      <i className="fas fa-arrow-down scroll_up__icon fa-flip-vertical" onClick={scrollToTop}></i>
      Top
    </div>

  </div>
  );
}

export default Home;
