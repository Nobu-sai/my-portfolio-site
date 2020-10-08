import React from 'react'
import './Portfolio.css';


function PortfolioData({portfolioToShow}) {
  return (    
    
    <div className="PortfolioDesc">      

      <div className="portfolio__heading">{portfolioToShow.name}</div>    
      <div className="explanation">
        <div className="user_story">
          <div className="user_story__heading">User Story:</div> 
            <div className="user_story__text">{portfolioToShow.user_story}</div>
        </div>
        <div className="dev_story">
          <div className="dev_story__heading">Dev Story:</div> 
          <div className="dev_story__text">{portfolioToShow.dev_story}</div>
        </div>
      </div> 

      <div 
      className="portfolio_image" 
      style={{ 
        backgroundImage: 
          'url(' + require(`../../../assets/portfolio-image/${portfolioToShow.imageName}.png`) + ')',                
          backgroundPosition: 'center',
          backgroundSize: 'cover',
        }}
      ></div>       

    </div>        

  )
}

export default PortfolioData;
