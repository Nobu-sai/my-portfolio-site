import React, { useEffect, useState } from 'react';
// import PortfolioSkill from './PortfolioSkill.js'
import PortfolioListItem from './PortfolioListItem';

import './Portfolio.css'
import { v4 as uuidv4 } from 'uuid';

// function PortfolioList({ portfolioData, portfolioListHandler }) {  
function PortfolioList(props) {  
  const [activeItem, setActiveItem] = useState();

  function onClickItemHandler(clickedPortfolioName) {
    setActiveItem(clickedPortfolioName)
    // setPortfolioToShow()
    props.portfolioToShowHandler(clickedPortfolioName)
    console.log(props)
  }

  // function setPortfolioToShow() {
  //   props.portfolioToShowHandler(activeItem)
  // }



  useEffect(()=>{
    setActiveItem(props.children[0].props.portfolioData.name)
  },[])

  // console.log(activeItem);



  

  // console.log(portfolioData)
  //   console.log("* What: portfolioData")
  //   console.log(" ** Meant to be: The List of Data for the MULTIPLE PORTFOLIOS.")    
    // portfolioData.map((portfolio)=>{console.log(portfolio.skill_list[0])})

   return (
    <div className="PortfolioList">     
      <div className="portfolio_list">            
        <div className="portfolio_list__background">                
          {
            props.children.map((child)=>(
              <PortfolioListItem
                name={child.props.portfolioData.name}
                skill_list={child.props.portfolioData.skill_list}
                url={child.props.portfolioData.url}
                onClickItemHandler={ onClickItemHandler }
                activeItem={activeItem}
                key={uuidv4()}
              >

              </PortfolioListItem>
            ))
          }      
        </div>
      </div>
    </div>    
  )
}

export default PortfolioList
