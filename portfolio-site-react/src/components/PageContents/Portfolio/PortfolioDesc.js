import React from 'react'
import './Portfolio.css';


function PortfolioDesc({portfolioToShow}) {  
  return (    
    <div className="PortfolioDesc">      
      
          <div className="portfolio__heading">{portfolioToShow.name}</div>    
          <div className="explanation">
            <div className="user_story">
              <div className="user_story__heading">User Story:</div> 
                <div className="user_story__text"><span class="yellow-marker">{portfolioToShow.user_story}</span></div>
            </div>
            <div className="dev_story">
              <div className="dev_story__heading">Dev Story:</div> 
              <div className="dev_story__text"><span class="yellow-marker">{portfolioToShow.dev_story}</span></div>
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

export default PortfolioDesc;
