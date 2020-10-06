import React from 'react';
import {Element, animateScroll as scroll } from 'react-scroll'

import AboutMe from '../PageContents/AboutMe/AboutMe.js';
import Skill from '../PageContents/Skill/Skill.js';
import Header from '../Header/Header.js';
import Portfolio from '../PageContents/Portfolio/Portfolio.js';
import Footer from '../../components/Footer/Footer.js'
import MenuContainer from "../Menu/MenuContainer.js";


import './Home.css'


function Home({pdf_link}) {
  

  return (
    <div className="Home">                               
    
      <MenuContainer />

      <Header />               
    
      <Element name="about_me">
        <AboutMe />      
      </Element>        
      
      <Element name="skill" >
        <Skill />
      </Element>


      <Element name="portfolio" >
        <Portfolio />  
      </Element>                   
            
  
      <Footer pdf_link={pdf_link} />    
                

  </div>
  );
}

export default Home;
