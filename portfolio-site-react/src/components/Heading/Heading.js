import React from 'react'
import './Heading.css'


function Heading({content, content_2}) {

  return (    
    <div className="heading" >
      {content}
      {content_2}
    </div> 
  )
}

export default Heading;
