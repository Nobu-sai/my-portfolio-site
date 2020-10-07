import React from 'react'
import Typist from 'react-typist';

import Heading from '../Heading/Heading';

import './Header.css'




function Header() {

  // let typeDone = false;
  
  // const typeHander = () => {
  //   typeDone = true;
  // }

  
  return (
    <div className="header" id="header">
      
      <Heading 
        content={
          <>
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
          </>
        }
        content_2={
          <>  
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
          </>          
        } 

      />

    </div>  
  
  )
}

export default Header
