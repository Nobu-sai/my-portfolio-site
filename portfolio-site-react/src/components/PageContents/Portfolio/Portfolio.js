import React, { useEffect, useState } from 'react'
import Heading from '../../Heading/Heading.js'
import PortfolioDesc from './PortfolioDesc.js';
import PortfolioList from './PortfolioList.js'
import '../Section.css';
import './Portfolio.css';
import { db } from '../../../firebase.js';

function Portfolio() {

  const [portfolioToShow, setPortfolioToShow] = useState(null)
  
  let isInitial = true;

  let portfolioData = [];  

  useEffect(()=>{
    portfolioDataHandler()    
  }, [])

  const portfolioDataHandler = () => {
    db.collection('portfolio-data').onSnapshot( (snapshot)=>{
      // console.log(snapshot.docs)
        snapshot.forEach( (doc)=> {              
        portfolioData.push(doc.data())    
          // setPortfolioData([...portfolioData, doc.data()])
        })
        console.log(portfolioData)    
        portfolioListHandler()            
    })  
    console.log(portfolioData)     
    
  }


// Set  portfolio to show 
// => If it is inital state or before the user click an item of portfolio, then set the first item of  portfolioData Array  as the  portoflio to show .
// => If there is an List Item clicked, it is set as the  portfolio to show .
// * Then, it might be better to call this Funciton as  portfolioToShowHander() , because it is unnecessarily handled by the List. 
 const portfolioListHandler = (clickedListItem) => {
    setPortfolioToShow("")
    if(isInitial) {
      setPortfolioToShow(portfolioData[0])
      isInitial = false;        
      console.log(portfolioData)         
    } else {
      setPortfolioToShow(portfolioData[clickedListItem]);   
      
    } 
  
  }  

  // const addData = () => {      
  //     db.collection('portfolio-data').add(
  //       {
  //         name: `${portfolio[1].name}`,
  //         imageName: `${portfolio[1].imageName}`,
  //         skill: `${portfolio[1].skill}`,
  //         url: `${portfolio[1].url}`,
  //         user_story: `${portfolio[1].user_story}`,
  //         dev_story: `${portfolio[1].dev_story}`      
  //       })     

  // }

  return (
    <div className="section" id="portfolio">
      <Heading  content="Portfolio" />
  
      <div className="section_contents portfolio_contents">  

      {/* <button onClick={e => addData()}>Submit Portfolio</button> */}     
      
      {        
        <PortfolioList 
          portfolioData={portfolioData} 
          portfolioListHandler={portfolioListHandler}
        />        
      } 
    

      {
        portfolioToShow &&
        <PortfolioDesc 
          portfolioToShow={portfolioToShow}
        />  
      }
      
      </div>

    </div>  
  )
}

export default Portfolio
