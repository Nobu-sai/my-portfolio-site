import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../style/page_menu.css';

function PageMenu(props) {

  // const showSettings = (e) => {
  //   e.preventDefault()
  // }  

  return (
    <div className="menu_container">
      <Menu right>
         <div className="page_menu__heading">This Page</div>
          <a onClick={e => e.preventDefault()} className="menu-item" href="#about_me">About Me</a>
          <a onClick={e => e.preventDefault()} className="menu-item" href="#sklill">Skill</a>
          <a onClick={e => e.preventDefault()}className="menu-item" href="#portfolio">Portfolio</a>
          {/* <a className="menu-item--small" href="#job_offer">Job Offer</a> */}
        </Menu>
    </div>
       
    
    // <div className="page_menu">
        
    //     <i className="fas fa-times page_menu__close_icon"></i>        

    //     <div className="page_menu__list">
    //       <div className="page_menu__heading">This Page</div>

    //       <div className="page_menu__item">
    //         <a href="#about_me">About Me</a>
    //       </div>
    //       <div className="page_menu__item">
    //         <a href="#sklill">Skill</a>
    //       </div>      
    //       <div className="page_menu__item">
    //         <a href="#portfolio">Portfolio</a>
    //       </div>
    //       {/* <div className="page_menu__item">
    //         <a href="#job_offer">Job Offer</a>
    //       </div>   */}
    //     </div>
    // </div>
    
  )
}

export default PageMenu;
