import React from 'react'
import {animateScroll as scroll } from 'react-scroll'

import './ScrollUp.css';

function ScrollUp() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
    <div className="scroll_up">
      <i className="fas fa-arrow-down scroll_up__icon fa-flip-vertical" onClick={scrollToTop}></i>
      <div className="top">Top</div>
    </div>

      
  )
}

export default ScrollUp;
