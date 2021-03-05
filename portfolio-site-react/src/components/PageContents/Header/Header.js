import React, {useEffect, useState} from 'react'
import Typist from 'react-typist';

import Heading from '../../Heading/Heading';

import './Header.css'




function Header() {

  const [boxShadow, setBoxShadow] = useState(null)

  useEffect(()=> {
    setTimeout(()=>{
      setBoxShadow("add")
    }, 3500)
  }, [])

  
  return (
    <div className={`header ${boxShadow}`} id="header">

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
        I'm Nobuya Saito. <br/> A Web Developer.  
      </Typist>
      
    
    </div>  
  
  )
}

export default Header
