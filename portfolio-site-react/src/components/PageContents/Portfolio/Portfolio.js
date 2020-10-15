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

  componentWillUnmount() {
    this.portfolioDataHandler()    
  }


  portfolioDataHandler = () => {
    let portfolioDataList = []

    db.collection('portfolio-data').onSnapshot((snapshot)=>{
      // console.log(snapshot.docs)      
        snapshot.forEach((doc)=> {  
          portfolioDataList.push(doc.data())    
          // this.setState({portfolioData: portfolioDataList})        
        })
        console.log("portfolioDataList: ", portfolioDataList)     
        console.log("portfolioDataList Array without Text (Underneath) * To See [] in Line 33 VS [{...},{...}] in Line 42 ")    
        console.log(" * To See [] in Line 35 VS [{...},{...}] in Line 44 ")    
        console.log(portfolioDataList)        
        console.log("portfolioData State: ", this.state.portfolioData) 
        this.setState({portfolioData: portfolioDataList})           
        console.log("portfolioData State: ", this.state.portfolioData)   
        
    })      
    
    console.log("portfolioDataList: ", portfolioDataList)     
    console.log("portfolioDataList Array without Text (Underneath)")    
    console.log(" * To See [] in Line 35 VS [{...},{...}] in Line 44 ")    
    console.log(portfolioDataList)       
    console.log("portfolioDataList in JSON.stringify(): ",  JSON.stringify(portfolioDataList))
    console.log("portfolioData State: ", this.state.portfolioData)     
    this.setState({portfolioData: portfolioDataList})
    console.log("portfolioData State: ", this.state.portfolioData)     
      

  }


  // Set  portfolio to show 
  // => If it is inital state or before the user click an item of portfolio, then set the first item of  portfolioData Array  as the  portoflio to show .
  // => If there is an List Item clicked, it is set as the  portfolio to show .
  // * Then, it might be better to call this Funciton as  portfolioToShowHander() , because it is unnecessarily handled by the List. 
  portfolioListHandler = (clickedListItem) => {    
    if(this.isInitial) {
      this.portfolioToShow = this.state.portfolioData[0]
      this.isInitial = false;        
      console.log(this.state.portfolioData)         
    } else {
      this.portfolioToShow = this.state.portfolioData[clickedListItem];   
      
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

  consoleLogState = () => {
    this.state.portfolioData && console.log("portfolioData State", this.state.portfolioData)
  }
  

  render() {
    return (

      <div className="section" id="portfolio">
        <Heading  content="Portfolio" />
    
        <div className="section_contents portfolio_contents">  
  
        {/* <button onClick={e => addData()}>Submit Portfolio</button> */}     
        {this.state.portfolioData && console.log("portfolioData State, line 90", this.state.portfolioData)}
        {console.log("portfolioData State, line 91", this.state.portfolioData)}
        
        {
          this.state.portfolioData &&
          <PortfolioList 
            portfolioData={this.state.portfolioData} 
            portfolioListHandler={this.portfolioListHandler}
          />        
        
        }
  
        {
          // this.state.portfolioData &&
          // console.log(this.portfolioToShow)
          // <PortfolioDesc 
          //   portfolioToShow={this.portfolioListHandler}
          // />  
        }  
        
        
          
        
        
        </div>
  
      </div>  
    )
  }
}


export default Portfolio;
