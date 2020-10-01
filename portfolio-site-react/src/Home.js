import React from 'react';
import {Element, animateScroll as scroll } from 'react-scroll'
import Typist from 'react-typist';
// import Typical from 'react-typical'

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
    <div className="App">                          
     
    
     <MenuContainer />

    {/* <Header />                */}


    <div className="header">
      <div className="header_messages">
        <div className="header__main_heading">           
            <Typist                        
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
          </div>
        <div className="header_message">          
           <Typist            
            startDelay={500}
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
           <p>I'm Nobuya Saito.</p>
           <p>A Developer. </p> 
          </Typist>
         {/* {setInterval(()=>(
            <Typical
            steps={["i'm Nobuya Saito", 500]}
            loop="no"
            wrapper="p"
            />         
         ), 1000)} */}
        </div>
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
