import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import { Link, Element, animateScroll as scroll, scroller } from 'react-scroll'
// import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, szcroller } from 'react-scroll'

// import PageMenu from './components/PageMenu.js';
import AboutMe from './components/AboutMe.js';
import Skill from './components/Skill.js';
// import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
// import ScrollUp from './components/ScrollUp.js'

import './App.css'
import './style/page_menu.css';
import './style/header.css'
import './style/about_me.css'




function Home(props) {
  // Scroll
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  const scrollTo = (to) => {
    scroller.scrollTo(to, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  
  return (
    <div className="App">                          
    {/* <AppRouter />          */}      
    
    {/* <PageMenu /> */}

    {/* <div className="menu_container"> */}
    <Menu right>
      <div className="page_menu__heading">This Page</div>
      <div className="page_menu__list">
      <div onClick={() => scrollToTop()}className="page_menu__item">Top</div>
        <div onClick={() => scrollTo('about_me')}className="page_menu__item">About Me</div>
        <div onClick={() => scrollTo('skill')}className="page_menu__item">Skill</div>
        <div onClick={() => scrollTo('portfolio')}className="page_menu__item">Portfolio</div>
        {/* <div onClick={() => scrollTo('job_offer')}className="page_menu__item">Job Offer</div> */}
      </div>
        
    </Menu>
  {/* </div> */}
    {/* <Header />                */}

    <div class="header">
      <div className="header_messages">
        <div className="header__main_heading">Welcom.</div>
        <h2 className="header__sub_heading">I'm Nobuya Saito.</h2>
      </div>
      
      <div className="header_list">        
        
        <div className="header_list__heading">This Page</div>          

        <div className="header_list__items">
          <div className="header_list__item about_me">
            <Link 
              activeClass="active" 
              className="scroll_about_me scroll" 
              to="about_me" 
              spy={true} 
              smooth={true} 
              duration={500} 
            >
              About Me
              <i className="fas fa-arrow-down scroll_down__icon"></i>
            </Link>
            
          </div>
          <div className="header_list__item skill">
            <Link 
              activeClass="active" 
              className="scroll_skill scroll" 
              to="skill" 
              spy={true} 
              smooth={true} 
              duration={500} 
            >
              Skill
              <i className="fas fa-arrow-down scroll_down__icon"></i>
            </Link>
            
          </div>
          <div className="header_list__item portfolio">
            <Link 
              activeClass="active" 
              className="scroll_portfolio scroll" 
              to="portfolio" 
              spy={true} 
              smooth={true} 
              duration={500} 
            >
              Portfolio
              <i className="fas fa-arrow-down scroll_down__icon"></i>
            </Link>
                      
          </div>                  
        </div>  
      </div>
    </div>  
    
    <Element name="about_me">
      <AboutMe link_2={props.link_1} />
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
