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
    console.log("Description about notes in this Console like underneath.")
    console.log("* = My Understanding about A line of code for the Logged Value")
    console.log("... = My Understanding to LINES of code for a group of process") 
    this.portfolioDataHandler()    
  }

  // componentWillUnmount() {
  //   this.state.portfolioData && this.portfolioListHandler()  
  // }


  portfolioDataHandler = () => {
    let portfolioDataList = []

    db.collection('portfolio-data').onSnapshot((snapshot)=>{
      // console.log(snapshot.docs)      
        snapshot.forEach((doc)=> {  
          portfolioDataList.push(doc.data())              
        })       
        console.log(this.state.portfolioData)      
        console.log("* portfolioData State INSIDE  db.collection().onSnapshot().")      
        console.log("* portfolioData State BEFORE setState() Callback.")      
        this.setState({portfolioData: portfolioDataList})   
        
        this.portfolioListHandler()  
    })      
    
  }


  // Set  portfolio to show 
  // => If it is inital state or before the user click an item of portfolio, then set the first item of  portfolioData Array  as the  portoflio to show .
  // => If there is an List Item clicked, it is set as the  portfolio to show .
  // * Then, it might be better to call this Funciton as  portfolioToShowHander() , because it is unnecessarily handled by the List. 
  portfolioListHandler = (clickedListItem) => {    
      clickedListItem && console.log("...This Lifecycle is given birth by onClick Event on a List Item in <PortfolioList>.")
      console.log(clickedListItem)   
      console.log("* What: clickedItem Param which is meant to be sent by Onclick Event of portfolio list item.")
      console.log(this.state.portfolioToShow)      
      console.log("* What: portfolioToShow State")   
      console.log("* When: BEFORE if...else Statement")   
      console.log("** This is as it is meant to be, because the Values is not Updated yet.")   

      if(this.isInitial) {
        console.log("...Where: INSIDE if Statement, meaning the First Lifecycle given birth by basic React Lifecycle.")
        // console.log("* When: AFTER the  componentWillUnmount() is Triggered.")
        this.setState({portfolioToShow: this.state.portfolioData[0]})
        console.log("...When: After the FIRST Call to setState() in portfolioListHandler(), so the JSX and Child Components were rendred.")      
        console.log(this.state.portfolioToShow)
        console.log("* What: portfolioToShow State")      
        console.log("* Where: INSIDE if Statement")   
        
        this.isInitial = false;        
        console.log(this.isInitial)    
        console.log(" * What: isInitial Property")            
        console.log("...When: The First <portfolio> Lifecycle ended. Into a new Life.")
        console.log("")
      } else {        
        console.log("...Where: INSIDE else Statement, meaning the Second or So Lifecycle given birth by onClick Event on a List Item in <PortfolioList>.")
        console.log(this.state.portfolioData)
        console.log("* What: this.state.portfolioData")      
        console.log(clickedListItem)
        console.log("* What: clickedListItem Param")
        console.log(" ** Meant to be: The CLICKED portfolio data which is sent from <PortfolioList> when the onClick Event occurred.")    
        console.log(this.state.portfolioData[clickedListItem])
        console.log("* What: this.state.portfolioData[clickedListItem]")
        console.log(" ** Meant to be: The CLICKED portfolio data which is NOTED with the  clickedListItem Param  sent from <PortfolioList> when the onClick Event occurred.")    
        const clickedPortfolioData = this.state.portfolioData.find((portfolio)=> portfolio.name == clickedListItem)
        console.log(clickedPortfolioData)
        console.log("* What: clickedPortfolioData const Variable")
        console.log("** Meant to be: All the date for the clicked portfolio")


        this.setState({portfolioToShow: clickedPortfolioData})       
        console.log("...When: After the SECOND OR SO Call to setState(), so the JSX and Child Components were rendred.")       
        console.log(this.state.portfolioToShow)     
        console.log("* What: portfolioToShow State")      
        console.log("* When: INSIDE else Statement")   
        console.log("** X Meaining the Value should be the CLICKED portfolio data (Noted with  clickedListItem Param )")
        console.log("** Meaining the Value should be the CLICKED portfolio data (Noted with  clickedPortfolioData const Variable )")
        console.log("...When: The Second or So <portfolio> Lifecycle ended. Into a new Life.")
      } 
    
  }  

  // addData = () => {      
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
  

  render() {
    return (

      <div className="section" id="portfolio">
        <Heading  content="Portfolio" />
    
        <div className="section_contents portfolio_contents">  
  
        {/* <button onClick={e => addData()}>Submit Portfolio</button> */}     
    
        {
          this.state.portfolioData &&
          <PortfolioList 
            portfolioData={this.state.portfolioData} 
            portfolioListHandler={this.portfolioListHandler}
          />        
        
        }
  
        {
          this.state.portfolioToShow &&
          // this.state.portfolioToShowIsLatest === true &&
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
