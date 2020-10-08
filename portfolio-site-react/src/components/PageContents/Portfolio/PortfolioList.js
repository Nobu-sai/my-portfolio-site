import React from 'react'
import './Portfolio.css'

function PortfolioList({portfolioData, portfolioListHandler}) {
  return (
    <div className="PortfolioList">
            
      <div className="portfolio_list">            
        <div className="portfolio_list__background">                      

          {Object.entries(portfolioData).map((portfolio, i)=>(
            <>
              <div 
              className="portfolio_list__item" 
              key={i}
              onClick={e => portfolioListHandler(portfolio[1].name)}
                >
                  <div className="portfolio_list__title">
                      {portfolio[1].name}
                </div>   
                  <div className="portfolio_data"> 
                  <div className="portfolio_data__item">
                    <div 
                      className="portfolio_data__title"> 
                      Skill<br/> <span className="portfolio_skill__name"> {portfolio[1].skill}.</span>
                    </div> 
                  </div>

                  <div className="portfolio_data__item">
                    <div>
                        <div className="portfolio_data__title">
                          Webpage
                        </div>
                        <a 
                          href={portfolio[1].url}
                          className="visit_url_container"                            
                        >
                          <span className="visit_url">Visit.</span> 
                        </a>
                      </div>
                  </div>
                                          
                  
                  </div>
                
              </div>      
              
            </>
          ))
          }
    
        </div>
          
      </div>
      
    </div>    
  )
}

export default PortfolioList
