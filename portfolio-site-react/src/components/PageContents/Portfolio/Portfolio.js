import React from 'react'
import Heading from '../../Heading/Heading.js'
import PortfolioDesc from './PortfolioDesc.js';
import PortfolioList from './PortfolioList.js'
import '../Section.css';
import './Portfolio.css';

import { db } from '../../../firebase.js';



class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {portfolioData: []}
    this.state = {portfolioToShow: null}        
    this.isInitial = true;
  }

  // componentDidMount() {
  //   this.portfolioDataHandler()    
  // }

  componentDidMount() {
    this.portfolioDataHandler()    
  }

  portfolioDataHandler = () => {
    let portfolioDataList = []  
    db.collection('portfolio').onSnapshot((snapshot)=>{
        snapshot.forEach((doc)=> {  
          portfolioDataList.push(doc.data())              
        })                              
        this.setState({portfolioData: portfolioDataList})           
        this.portfolioToShowHandler()  
    })      
  }

  // Set  portfolio to show 
  // => If it is inital state or before the user click an item of portfolio, then set the first item of  portfolioData Array  as the  portoflio to show .
  // => If there is an List Item clicked, it is set as the  portfolio to show .
  portfolioToShowHandler = (clickedListItem) => {    
      if(this.isInitial) {
        this.setState({portfolioToShow: this.state.portfolioData[0]})        
        this.isInitial = false;                        
      } else {               
        const clickedPortfolioData = this.state.portfolioData.find((portfolio)=> portfolio.name == clickedListItem)        
        this.setState({portfolioToShow: clickedPortfolioData})       
      } 
  }  

  // addData = () => {      
  
  //   this.state.portfolioData.map((portfolio)=>{
  //     // console.log(portfolio)
  //     db.collection('portfolio').add(
  //       {
  //         name: portfolio.name,
  //         imageName: portfolio.imageName,
  //         skill: portfolio.skill,
  //         url: portfolio.url,
  //         user_story: portfolio.user_story,
  //         dev_story: portfolio.dev_story,    
  //       })
  //   })     

  // }
        
  
  render() {
    return (
      <div className="section" id="portfolio">
        <Heading  content="Portfolio" />
        <div className="section_contents portfolio_contents">  
        {/* <button onClick={this.addData}>Submit Portfolio</button> */}
        {
          this.state.portfolioData &&
          <PortfolioList 
            portfolioData={this.state.portfolioData} 
            portfolioListHandler={this.portfolioToShowHandler}
          />                
        }
        {
          this.state.portfolioToShow &&
          <PortfolioDesc           
            portfolioToShow={this.state.portfolioToShow}
            portfolioToShowIsLatest={this.state.portfolioToShowIsLatest}
          />  
        }  
        </div>
      </div>  
    )
  }
}

export default Portfolio;
