import React from 'react';
import {Element, animateScroll as scroll } from 'react-scroll'
import Typist from 'react-typist';


import AboutMe from '../AboutMe/AboutMe.js';
import Skill from '../Skill/Skill.js';
// import Header from './components/Header.js';
import Portfolio from '../Portfolio/Portfolio.js';
import Footer from '../../components/Footer/Footer.js'
import MenuContainer from "../Menu/MenuContainer.js";


import './Home.css'
import '../Header/Header.css'







function Home({pdf_link}) {
  

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
      // link_2={link_1}      
      className="section_container"/>
 
    </Element>        
    
    <Element name="skill" className="section_container">
      <Skill />
    </Element>


    <Element name="portfolio" className="section_container">
      <Portfolio />  
    </Element>                   
          
 
    <Footer pdf_link={pdf_link} />    
              

  </div>
  );
}

export default Home;
