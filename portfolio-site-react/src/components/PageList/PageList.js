import React from 'react'
// import { Link } from 'react-scroll'
 import './PageList.css'

function List({heading, item_1, item_2, item_3, item_4}) {
  // (item_1,2,3)
  // className: page_list__item, about, skill, portfolio

  const setActive = () =>{

  }
  
  return (
    <div className="page_list">                      
      <div className="page_list__heading">
        {/* <Typist startDelay={1000}> */}
          {heading}
        {/* </Typist> */}
      </div>          

      <div className="page_list__items">        
          {item_1}
          {item_2}                 
          {item_3}             
          {item_4}  
      </div>  
            
    </div>    
  )
}

export default List
