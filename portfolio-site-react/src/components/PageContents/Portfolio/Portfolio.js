import React from 'react'
import Heading from '../../Heading/Heading.js'
import PortfolioSelection from './PortfolioSelection/PortfolioSelection';
import PortfolioDesc from './PortfolioDesc.js';
import PortfolioList from './PortfolioList.js'
import '../Section.css';
import './Portfolio.css';

import { defaultDB } from '../../../firebase.js';


class Portfolio extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      portfolioData: [],
        // The list of portfolios.
      portfolioToShow: null,  
        // The portfolio to show in PortfolioDesc.js. Which is determined by CLIKING or the first item (portfolioData[0]) in the initial.
      skills: [],    
        // Sent to PortfolioSelection.js to make tabs of skill names.  
      searchKey: "All",
        // The final key to search for the portfolios to fetch.
      }         
  }

  componentDidMount() {
    this.portfolioDataHandler();        
    this.getSkills();
      // When to Call
        // After portfolioDataHandler()
        // P: To EXCLUDE the skills NOT used in any portfolios to DISPLAY, I need to KNOW the portfolios to DISPLAY for checking if the skills are used in them. 
  }

  componentDidUpdate() { 
    // console.log(this.state.skills)
  }

  getSkills = () => {
    let skillList = [];
    defaultDB.collection('portfolio').onSnapshot((snapshot)=>{
      snapshot.forEach((doc)=> { 
        doc.data()['skill_list'].find((skill)=> {          
          this.state.portfolioData.map((portfolio)=>{
            if(portfolio['skill_list'].includes(skill)) {
              // Check if the DISPLAYED portfolios (*) include the skill being in the current ITERATION. 
              // * (DISPLAYED portfolios)
              // = After the Portfolio.js/removeUnwantedPortfolios() Mehthod excluded unwanted portfolios. 
              if(!skillList.includes(skill)) {
                skillList.push(skill)
              }
              
            }
          })
        }) 
      })
      this.setState({
        skills: skillList,
      })    
    })      
  }

  // Get the SKILL (*) used to search for the related portfolios.
  // * (the SKILL)
  // = As the skill tab clicked and Sent back from PortfolioSelection.js.
  portfolioSearchKeyHander = (skill) => {    
      
    this.setState({
      searchKey: skill,
    })    
    
    this.portfolioDataHandler()

  }
  
  // Get the LIST of portfolios from Firestore. 
  portfolioDataHandler = () => {
    let portfolioDataList = []  
    defaultDB.collection('portfolio').onSnapshot((snapshot)=>{
        snapshot.forEach((doc)=> {  
          
          this.addPortfolioToList(doc, portfolioDataList)    
          
          this.removeUnwantedPortfolios(portfolioDataList)

          this.reorderPortfolioList(portfolioDataList)
          
          // console.log(portfolioDataList)
                      
        })           
          /// These Functions are Called at the END of componentDidMount() Lifecycle Method because of the ASYNCHRONOUS process for the defaultDB Method Code Block.                   
        this.setState({portfolioData: portfolioDataList});
        this.portfolioToShowHandler();
    })      
  }
  
  // Assign fetched portfolios to the Portfolio.js/portfolioData Array State based on the Portfolio.js/searchKey State.
  addPortfolioToList = (portfolioData, portfolioDataList) => {
    if (this.state.searchKey === "All") {
      portfolioDataList.push(portfolioData.data())                      
    } else {      
        this.setState({
          portfolioToShow: null, 
        })
          // For Portfolio.js/PortfolioToShowHandler() Method to set the portfolio to show as Portfolio.js/States/PortfolioData[0], because it's the time LIST is MADE, thus there is NO chance to CLICK any of them.
      portfolioData.data()['skill_list'].map((skill)=> {
        if(skill === this.state.searchKey) {
          portfolioDataList.push(portfolioData.data());
        }
      })
    }
    
  }

  removeUnwantedPortfolios = (portfolioDataList) => { 
    // Remove unnecessary portfolios form the list. 
      portfolioDataList.map((portfolio) => {
      if (portfolio.name == "Google Map Store Locator" || portfolio.name == "Twitter Clone" || portfolio.name == "Blog App" ) {
        // console.log(portfolioDataList.indexOf(portfolio))
        // console.log('* Portfolio to remove: ', portfolio.name)
        portfolioDataList.splice(portfolioDataList.indexOf(portfolio))
      }
    
    })
  }


  reorderPortfolioList = (portfolioDataList) => {
   
    portfolioDataList.map((portfolio_1, index_1) => {
      portfolioDataList.map((portfolio_2, index_2) => {
        if (portfolioDataList[index_1].name.localeCompare(portfolioDataList[index_2].name) < 0) {       
            // Here it's TRUE
            // The part of portfolioDataList[index_1].name.localeCompare(portfolioDataList[index_2].name) Returns -1
            // This means the portfolioDataList[index_1] is LESS than portfolioDataList[index_2].name.
          // console.log(portfolioDataList[index_1].name)
          // console.log(portfolioDataList[index_2].name)      
          // console.log(portfolioDataList[index_1].name.localeCompare(portfolioDataList[index_2].name))
          let greaterItem = portfolioDataList[index_2];                         
          portfolioDataList[index_2] = portfolioDataList[index_1];
          portfolioDataList[index_1] = greaterItem;          
        }
      })
    }) 

  }
    
      
    
  


  // Set the ONE portfolio to show 
  // => If it is inital state or before the user click an item of portfolio, then set the first item of  portfolioData Array  as the  portoflio to show .
  // => If there is an List Item clicked, it is set as the  portfolio to show .
  portfolioToShowHandler = (clickedPortfolioName) => {    
    // console.log(this.state.portfolioData)
    // if(this.state.isInitial) {
      if(!this.state.portfolioToShow) {
        // When the FIRST time to display portfolio ever in this Lifecycle of Portfolio Component. 
      this.setState({
        portfolioToShow: this.state.portfolioData[0],        
      })                    
    } else {               
      const clickedPortfolioData = this.state.portfolioData.find((portfolio)=> portfolio.name == clickedPortfolioName)        
      this.setState({portfolioToShow: clickedPortfolioData})       
    } 
  }  

  // addData = () => {      
  
  //   this.state.portfolioData.map((portfolio)=>{
  //     // console.log(portfolio)
  //     defaultDB.collection('portfolio').add(
  //       {
  //         name: "Amazone Clone",
  //         imageName: "amazon-clone",
  //         skill_list: ["HTML", "CSS", "JavaScript", "React.js", "Firebase", "Stripe"],
  //         url: "https://e-clone-no-1-input.web.app/",
  //         user_story: "We can enjoy limitless shopping virtually.",
  //         dev_story: "I used React Context API and Stripe.",    
  //       })
  //   })     

  // }
        
  
  render() {
    const singlePortfolioResult = (    
      <div className="portfolio__resultAmount">
        {this.state.portfolioData.length} hit portfolio.
      </div> 
    );

    const multiplePortfolioResults = (
      <div className="portfolio__resultAmount">
        {this.state.portfolioData.length} hit portfolios.
      </div> 
    );

    return (
      <div className="section" id="portfolio">
        <Heading  content="Portfolio" />
        <div className="section_contents portfolio_contents">  
          {/* <button onClick={this.addData}>Submit Portfolio</button> */}
          
          {
            this.state.skills.length > 0 && 
            <PortfolioSelection 
              skills={this.state.skills}
              portfolioSearchKeyHander={this.portfolioSearchKeyHander}            
            />
          }

          {
            this.state.portfolioData.length === 1 && 
             singlePortfolioResult
          }

          {
            this.state.portfolioData.length > 1 && 
             multiplePortfolioResults
          }

          <div className="portfolio_display">
            {              
             this.state.portfolioData.length > 1 &&
                <PortfolioList 
                  portfolioToShowHandler={this.portfolioToShowHandler}
                >     
                  {
                    this.state.portfolioData.map((portfolio)=>(
                      <div 
                        // portfolioName={portfolio.name}
                        portfolioData={portfolio}
                        >
                          {portfolio}
                        </div>
                    ))
                  }
                </PortfolioList>      
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
        
      </div>  
    )
  }
}

export default Portfolio;
