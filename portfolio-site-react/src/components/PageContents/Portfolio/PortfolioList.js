import React from 'react'
import './Portfolio.css'
import { v4 as uuidv4 } from 'uuid';

function PortfolioList({ portfolioData, portfolioListHandler }) {

   return (
    <div className="PortfolioList">
            
      <div className="portfolio_list">            
        <div className="portfolio_list__background">                
          {
            portfolioData.map((portfolio)=> (                 
              <div 
              className="portfolio_list__item"             
              onClick={e => portfolioListHandler(portfolio.name)}
              key={uuidv4()}
                >
                  <div className="portfolio_list__title">
                      {portfolio.name}
                </div>   
                  <div className="portfolio_data"> 
                  <div className="portfolio_data__item">
                    <div 
                      className="portfolio_data__title"> 
                      Skill<br/> <span className="portfolio_skill__name yellow_marker"> {portfolio.skill}.</span>
                    </div> 
                  </div>

                  <div className="portfolio_data__item">
                    <div>
                        <div className="portfolio_data__title">
                          Webpage
                        </div>
                        <a 
                          href={portfolio.url}
                          className="visit_url_container"                            
                        >
                          <span className="visit_url yellow_marker">Visit.</span> 
                        </a>
                      </div>
                  </div>                                                        
                </div>
                
              </div>                
            ))           
          }          
        </div>          
      </div>      
    </div>    
  )
}

export default PortfolioList
