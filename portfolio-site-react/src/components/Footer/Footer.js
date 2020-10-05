import React from 'react'
import Typical from 'react-typical'
import {animateScroll as scroll } from 'react-scroll'
import './Footer.css'

import PageList from '../PageList/PageList';

function Footer({pdf_link}) {
  // Scroll
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div className="footer">
      <div className="footer__heading_container">
        <Typical 
          className="footer__heading"
          steps={['Are you leaving?', 1000, 'Thanks for visiting!', 1000, 'What will you do next?', 1000, 'See you. Have a good day!', 1000]}
          loop={Infinity}
          wrapper="p"
        />
      </div>      
      
        <div className="contact footer__item">       
        <PageList 
          className="contact footer__item"
          heading="Contact Me"
          item_1={ 
            <a 
              className="page_list__item mail" 
              href="mailto: snz0901@gmail.com">
               <div class="page_list__item_name">Email</div>            
            </a>                    
          }
          item_2={
            <a 
              className="page_list__item github" 
              href="https://github.com/Nobu-sai">            
              <div class="page_list__item_name">GitHub</div>
              <i class="fab fa-github-square"></i>              
            </a>  

          }
          item_3={
            <a 
              className="page_list__item linkedin" 
              href="https://www.linkedin.com/in/nobuya-saito-3711721b7/">              
              <div class="page_list__item_name">LinkedIn</div>             
              <i class="fab fa-linkedin"></i>
            </a>
          }
          item_4={
            <a 
              className="page_list__item">             
              <div class="page_list__item_name resume">{pdf_link}            
              </div>
              
            </a>   
          }
        />                  
 
        </div>     

      <div className="footer__item">
        <PageList 
          heading="Image URL"
          item_1={
            <a 
              // className="image_source__item about_me" 
              className="page_list__item about_me" 
              href="https://images.unsplash.com/photo-1465809873722-b4bf7208d2b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=942&q=80">
                <div class="page_list__item_name">About Me</div>       
            </a>               
          }
          item_2={
            <a 
              // className="page_list__item about_me" 
              className="page_list__item skill" 
              href="https://images.unsplash.com/photo-1475873326779-99eac8da25b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80">
                <div class="page_list__item_name">Skill</div>       
            </a>
          }
          item_3={
            <a 
              // className="image_source__item portfolio" 
              className="page_list__item portfolio" 
              href="https://images.unsplash.com/photo-1529444161959-5690000911bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">
                <div class="page_list__item_name">Portfolio</div>       
            </a>   
          }
        />                  

      </div>


      <div className="scroll_up">
        <i className="fas fa-arrow-down scroll_up__icon fa-flip-vertical" onClick={scrollToTop}></i>
        Top
      </div>

    </div>
            
        

  )
}

export default Footer