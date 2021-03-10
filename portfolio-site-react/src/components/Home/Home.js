import React from 'react';
import {Element} from 'react-scroll'

import About from '../PageContents/About/About.js';
import Skill from '../PageContents/Skill/Skill.js';
import Footer from '../PageContents/Footer/Footer';
import Header from '../PageContents/Header/Header';
import Portfolio from '../PageContents/Portfolio/Portfolio.js';
import MenuContainer from "../Menu/MenuContainer.js";


import './Home.css'


function Home({pdf_link, public_commitment}) {

  return (
    <div className="Home">                               
    
      <MenuContainer />

      <Header />               
    
      <Element name="about">
        <About 
          public_commitment={public_commitment}
        />      
      </Element>        
      
      {/* <Element name="skill" >
        <Skill />
      </Element> */}


      <Element name="portfolio" >
        <Portfolio />  
      </Element>                   
            
  
      <Footer pdf_link={pdf_link} />    
                

  </div>
  );
}

export default Home;
