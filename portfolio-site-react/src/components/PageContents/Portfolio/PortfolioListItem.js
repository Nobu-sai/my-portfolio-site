
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

// Personal
import './Portfolio.css';

export default function PortfolioListItem(props) {

  function onClickItemHandler() {
    props.onClickItemHandler(props.name)
  }

  let className = 'portfolio_list__item'

  if(props.activeItem === props.portfolioName) {
    className += ' active_item';
  }

  return (
    <div
      className={className}
     onClick={onClickItemHandler} 
    >
      
        <div className="portfolio_list__title">
        {props.name}
        </div>   
        <div className="portfolio_data"> 
          <div className="portfolio_data__itemsContainer">
            <div 
            className="portfolio_data__title"> 
              Skill
            </div>     
            <div className="portfolio_skill__name  portfolio_data_items">           
              {
                props.skill_list.map((skill, index)=>(
                  <div 
                    className="portfolio_skill__nameItem portfolio_data_item"
                    key={uuidv4()}
                  >
                    <span className="skill_name">{skill}</span>
                    {/* {index + 1 < props.skill_list.length && <span>, </span>}                                                             */}
                  </div>  
                ))
              }
            </div>                
          </div>

          <div className="portfolio_data__itemsContainer">
            <div>
              <div className="portfolio_data__title">
                Webpage
              </div>
              <a 
                href={props.url}
                className="visit_url_container portfolio_data_item"                            
              >
                <span className="visit_url yellow_marker">Visit.</span> 
              </a>
            </div>
          </div>                                                        
        </div>
    </div>
  )
}
