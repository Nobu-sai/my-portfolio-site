import React from 'react'
import './Portfolio.css';
import PortfolioImage from '../../../assets/PortfolioImage.js'


function PortfolioDesc({portfolioToShow}) {  
  return (    
    <div className="PortfolioDesc">      
         <div> 
            <div className="portfolio__heading">{portfolioToShow.name}</div>    
            <div className="explanation">
              <div className="user_story">
                <div className="user_story__heading">Our Story:</div> 
                  <div className="user_story__text"><span className="yellow_marker">{portfolioToShow.user_story}</span></div>
              </div>
              <div className="dev_story">
                <div className="dev_story__heading">My Story:</div> 
                <div className="dev_story__text"><span className="yellow_marker">{portfolioToShow.dev_story}</span></div>
              </div>
            </div> 
      
            <div 
            className="portfolio_image" 
            style={{ 
              backgroundImage: 
                // 'url(' + require(`../../../assets/portfolio-image/${portfolioToShow.imageName}.png`) + ')',                
                `url(${PortfolioImage[portfolioToShow.name]})`,                
                backgroundPosition: 'center',
                backgroundSize: 'cover',
              }}
            ></div>    
          </div>
        
    </div>        
  )
}

export default PortfolioDesc;
