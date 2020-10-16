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
    this.state = {portfolioToShowIsLatest: false}
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

    db.collection('portfolio-data').onSnapshot((snapshot)=>{
      // console.log(snapshot.docs)      
        snapshot.forEach((doc)=> {  
          portfolioDataList.push(doc.data())              
        })       
        this.setState({portfolioData: portfolioDataList})         
        this.portfolioListHandler()  
    })      
    
  }


  // Set  portfolio to show 
  // => If it is inital state or before the user click an item of portfolio, then set the first item of  portfolioData Array  as the  portoflio to show .
  // => If there is an List Item clicked, it is set as the  portfolio to show .
  // * Then, it might be better to call this Funciton as  portfolioToShowHander() , because it is unnecessarily handled by the List. 
  portfolioListHandler = (clickedListItem) => {    
    console.log("isInitial Property before setting portfolioToShow", this.isInitial)    
    this.setState({portfolioToShowIsLatest: false})
    console.log("portfolioToShowIsLatest State before setting portfolioToShow", this.state.portfolioToShowIsLatest)
    if(this.state.portfolioToShowIsLatest === false) {
      console.log(this.state.portfolioToShow)                 
      if(this.isInitial) {
        this.setState({portfolioToShow: this.state.portfolioData[0]})
        this.isInitial = false;        
        console.log("isInitial Property after setting portfolioToShow for the first time", this.isInitial)    
        this.setState({portfolioToShowIsLatest: true})
        console.log("portfolioToShow in <portfolioDesc>: ", this.state.portfolioToShow)           
      } else {
        this.setState({portfolioToShow: this.state.portfolioData[clickedListItem]})
        this.setState({portfolioToShowIsLatest: true})
        console.log("portfolioToShow in <portfolioDesc>: ",this.state.portfolioToShow)           
      } 
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
          this.state.portfolioToShowIsLatest === true &&
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
