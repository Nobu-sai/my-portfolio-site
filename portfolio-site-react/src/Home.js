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
      <div className="header_messages">
        <div className="header__main_heading">           
            <Typist      
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
          </div>
        <div className="header_message">          
           <Typist            
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
           <p>I'm Nobuya Saito. A Developer. </p> 
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
      <AboutMe 
      link_2={link_1}      
      className="section_container"/>
      {/* <AboutMe /> */}
    </Element>        
    
    <Element name="skill" className="section_container">
      <Skill />
    </Element>


    <Element name="portfolio" className="section_container">
      <Portfolio />  
    </Element>                   
          
    {/* <ScrollUp /> */}

    <div className="footer">
      <div className="footer_heading_container">
          <Typical 
            className="footer_heading"
            steps={['Are your leaving?', 1000, 'Thanks for visiting!', 1000, 'What are you going to do next?', 1000, 'See you. Have a good day!', 1000]}
            loop={Infinity}
            wrapper="p"
          />
        </div>
      <div className="footer__items">
        <div className="footer_item">
          <div className="footer_item__heading">Contact</div>
          <a className="footer_contact__item mail" href="mail: snz0901@gmail.com">
            <div class="footer_contact__item_name">Email</div>
            <i class="far fa-envelope"></i>
          </a>       

          <a className="footer_contact__item github" href="https://github.com/Nobu-sai">
            <div class="footer_contact__item_name">GitHub</div>
            <i class="fab fa-github-square"></i>
          </a>  

          <a className="footer_contact__item linkedin" href="https://www.linkedin.com/in/nobuya-saito-3711721b7/">
              <div class="footer_contact__item_name">LinkedIn</div>
              <i class="fab fa-linkedin"></i>
          </a>

        </div> 
          
        <div className="footer_item">
          <div className="footer_item__heading">Image Source</div>
          <a className="image_source__item" href="https://images.unsplash.com/photo-1465809873722-b4bf7208d2b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=942&q=80">About Me Section</a>
          <a className="image_source__item" href="https://images.unsplash.com/photo-1475873326779-99eac8da25b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80">Skill Section</a>
          <a className="image_source__item" href="https://images.unsplash.com/photo-1529444161959-5690000911bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">Portfolio Section</a>
      
          
        
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
