import React from 'react';
import {Element} from 'react-scroll'

import Me from '../PageContents/Me/Me.js';
// import Skill from '../PageContents/Skill/Skill.js';
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
    
      <Element name="me">
        <Me
          public_commitment={public_commitment}
        />      
      </Element>        
      
      {/* <Element name="skill" >
        <Skill />
      </Element> */}


      <Element name="portfolio" >
        <Portfolio />  
      </Element>                   
            
      <Element name="information">
        <Footer pdf_link={pdf_link} />    
      </Element>  
                

  </div>
  );
}

export default Home;
