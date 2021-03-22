
import React from 'react';
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
          <div className="portfolio_data__item">
            <div 
            className="portfolio_data__title"> 
              Skill
            </div>     
            <div className="portfolio_skill__name">
              {
                console.log("////////////////...New portfolio.../////////////////")
              }
              {
                console.log("Current portfolio: ", props.name)
              }
              {
                console.log("skill_list.length: ", props.skill_list.length)
              }
              {
                props.skill_list.map((skill, index)=>(
                  <div className="portfolio_skill__nameItem">
                    {skill}
                    {/* props.skill_list.length is STILL */}
                      {/* Possible. */}
                      {/* , is added aside from the LAST skill. As I meant. */}
                    {!index + 2 < props.skill_list.length && <span>, </span>}                     
                    {console.log("!index + 2 < props.skill_list.length && is: ", !index + 2 < props.skill_list.length && "true")}
                      {/* In Amazon Clone, , is displayed after ALL the skill */}
                      {/* In  */}
                      {/* => ! CAN be used in && conditional. */}
                    {index + 2 < props.skill_list.length && <span>, </span>}                     
                    {console.log("index + 2 < props.skill_list.length && is: ", index + 2 < props.skill_list.length && "true")}                  
                      {/* , is displayed aside from the last TWO ones. */}
                    {/* {!index + 2 > props.skill_list.length && <span>, </span>}                                           */}
                      {/* Nothing */}
                    {/* {!index + 1 === props.skill_list.length && <span>, </span>}                     */}
                      {/* Nothing, Impossible */}
                    {console.log("...New skill...")}
                    {console.log('Current skill: ', skill)}
                    {console.log('Current index: ', index)}
                    {console.log('Current index + 2: ', index + 2)}
                  </div>  
                ))
              }
            </div>                
          </div>

          <div className="portfolio_data__item">
            <div>
              <div className="portfolio_data__title">
                Webpage
              </div>
              <a 
                href={props.url}
                className="visit_url_container"                            
              >
                <span className="visit_url yellow_marker">Visit.</span> 
              </a>
            </div>
          </div>                                                        
        </div>
    </div>
  )
}
