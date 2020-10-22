import React from 'react'
import './Portfolio.css'
// import PortfolioData from './PortfolioDesc';

function PortfolioList({ portfolioData, portfolioListHandler }) {

  console.log(portfolioData)
  console.log("* What: portfolioData Prop")

  return (
    <div className="PortfolioList">
            
      <div className="portfolio_list">            
        <div className="portfolio_list__background">                
          {/* {Object.entries(portfolioData).map((portfolio, i)=>( */}                   
          { 
          // portfolioData.length > 0 &&
          portfolioData.map((portfolio, i)=> (                 
            <div 
            className="portfolio_list__item"             
            onClick={e => portfolioListHandler(portfolio.name)}
              >
                <div className="portfolio_list__title">
                    {portfolio.name}
              </div>   
                <div className="portfolio_data"> 
                <div className="portfolio_data__item">
                  <div 
                    className="portfolio_data__title"> 
                    Skill<br/> <span className="portfolio_skill__name"> {portfolio.skill}.</span>
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
                        <span className="visit_url">Visit.</span> 
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
