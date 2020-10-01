import React, { useEffect, useState } from 'react'
import '../style/portfolio.css';
// import '../style/PortfolioData.css';


function PortfolioData({clickedPortfolioData}) {

  // const [portfolioImage, setPortfolioImage] = useState("")
  
    
  // useEffect(()=>{
  //   console.log(clickedPortfolioData)
  // }, [clickedPortfolioData])
  // console.log('Show this data', {clickedPortfolioData})
 
  clickedPortfolioData ? console.log(clickedPortfolioData.image) : console.log("none")

  // useEffect(()=>{
  //   clickedPortfolioData && setPortfolioImage(clickedPortfolioData.image)
  //   console.log(portfolioImage)
  // }, [clickedPortfolioData]) 

  
  
  const getData = () => {
    
    // portfolioData.find((data) => {
    //   data.name === {props.portfolioName}
    // })  
  }

  return (
    <> 
      <div className="portfolio_data_container">
        <div className="portfolio_title">{clickedPortfolioData.name}</div>     
        <img 
        src={clickedPortfolioData.image} 
        style={
          {
          padding: '18px 0',
          width: '80%',
          height: '100%',
          overflow: 'scroll'
          }
        }  
        />
        {/* <div 
        className="portfolio_image" 
        style={
          { 
              // backgroundImage: `url(${clickedPortfolioData.image})` ,
              backgroundImage:`url(${clickedPortfolioData.image}})`,
              padding: '18px 0',
              width: '80%',
              height: '100%',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              overflow: 'scroll'
          }}
        ></div>                 */}
      </div>
    </>            
  )
}

export default PortfolioData;
