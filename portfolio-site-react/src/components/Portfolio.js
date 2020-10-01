import React, { useEffect, useState } from 'react'
import PortfolioData from './PortfolioData';


import '../style/section.css';
import '../style/portfolio.css';
// import '../style/PortfolioData.css';
import beatBoxImage from '../assets/portfolio-image/beat-box.png';
import blogAppImage from '../assets/portfolio-image/blog-app.png';
import drawingBordersAnimationImage from '../assets/portfolio-image/drawing-borders-animation.png';
import googleMapStoreLocatorImage from '../assets/portfolio-image/google-map-store-locator.png'
import guessNumberGameImage from '../assets/portfolio-image/guess-number-game.png';
import imageSliderImage from '../assets/portfolio-image/image-slider.png';
import movieListImage from '../assets/portfolio-image/movie-list.png';
import tabPanelWidgetImage from '../assets/portfolio-image/tab-panel-widget.png';
import textEditorImage from '../assets/portfolio-image/text-editor.png';
import toyChestImage from '../assets/portfolio-image/toy-chest.png';
import twitterCloneImage from '../assets/portfolio-image/twitter-clone.png';
import weatherAppImage from '../assets/portfolio-image/weather-app.png';




function Portfolio() {

  const [clickedPortfolioData, setclickedPortfolioData] = useState({})
  const [clickedPortfolioDataImage, setclickedPortfolioDataImage] = useState("")

  const portfolioData = {
    'Beat Box': {
      name: 'Beat Box',
      url: 'https://beat-box-js.firebaseapp.com/',
      image: beatBoxImage,
      skill: 'HTML, CSS, JS'
    },
    'Blog App': {
      name: 'Blog App',
      url: 'https://blog-app-31ad0.firebaseapp.com/',
      image: blogAppImage,
      skill: 'HTML, CSS, JS, Node.js, Express.js'
    },
    'Drawing Borders Animation': {
      name: 'Drawing Borders Animation',
      url: 'https://drawing-animaiton.firebaseapp.com/',
      image: drawingBordersAnimationImage,
      skill: 'HTML, CSS, JS'
    },
    // 'Form Validation': {
    //   name: 'Form Validation',
    //   url: 'https://form-validation-1c872.firebaseapp.com/',
    //   image: '../assets/portfolio-image/form-validation',
    //   skill: ''
    // },
    'Google Map Store Locator': {
      name: 'Google Map Store Locator',
      url: 'https://map-store-locator-1bfa8.firebaseapp.com/',
      image: googleMapStoreLocatorImage,
      skill: 'HTML, CSS, JS, Node.js, MongoDB, Google Map API'
    },
    'Guess Number Game': {
      name: 'Guess Number Game',
      url: 'https://guess-number-game-js.firebaseapp.com/',
      image: guessNumberGameImage,
      skill: 'HTML, CSS, JS'
    },
    'Image Slider': {
      name: 'Image Slider',
      url: 'https://image-slider-jquery.firebaseapp.com/',
      image: imageSliderImage,
      skill: 'HTML, CSS, JS, jQuery'
    },
    'Movie List': {
      name: 'Movie List',
      url: 'https://movie-list-c0ae3.web.app/',
      image: movieListImage,
      skill: 'HTML, CSS, JS'
    },
    'Tab Panel Widget': {
      name: 'Tab Panel Widget',
      url: 'https://tab-panel-widget.firebaseapp.com/',
      image: tabPanelWidgetImage,
      skill: 'HTML, CSS, JS, jQuery'
    },
    'Text Editor': {
      name: 'Text Editor',
      url: 'https://text-editor-ca31a.firebaseapp.com/',
      image: textEditorImage,
      skill: 'HTML, CSS, JS'
    },
    'Toy Chest': {
      name: 'Toy Chest',
      url: 'https://toy-chest-ef2ab.firebaseapp.com/',
      image: toyChestImage,
      skill: 'HTML, CSS, JS'
    },
    'Twitter Clone': {
      name: 'Twitter Clone',
      url: 'https://twitter-clone-e0f03.firebaseapp.com/',
      image: twitterCloneImage,
      skill: 'HTML, CSS, JS, Node.js, Express.js, Twitter API'
    },
    'Weather App': {
      name: 'Weather App',
      url: 'https://weather-app-832c9.firebaseapp.com/index.html',
      image: weatherAppImage,
      skill: 'HTML, CSS, JS, OpenWeather API'
    }
  }
  
  const portfolioList = React.createRef()
  // let portfolioNameList = [];
  // let clickedPortfolioName = "";

  // let clickedPortfolioData = "";
  // console.log(clickedPortfolioData)

  // useEffect(()=>{
  //   // console.log(clickedPortfolioData)
  //   if(!clickedPortfolioData.image === "") {
  //     setclickedPortfolioDataImage(clickedPortfolioData.image);
  //     console.log(clickedPortfolioDataImage)
  //   }  
  //   console.log(clickedPortfolioData.image)
  //   console.log(clickedPortfolioDataImage)
   
  // }, [clickedPortfolioData])

  
  // useEffect(()=>{
  //   // console.log(portfolioList.current.children[0].children)
  //   const portfolioNameListHTMLCollection = portfolioList.current.children[0].children
  //   Array.prototype.map.call(portfolioNameListHTMLCollection, portfolioName => {
  //     // console.log(portfolioName)
  //     portfolioNameList.push(portfolioName.innerText)
  //   })    
  // })


  const setPortfolio = (clickedListItem) => {
    
    // Find the correponsind Item from the Clicked List Item
    // console.log( await portfolioNameList)
    //  clickedPortfolioName = await portfolioNameList.find((listItem) => listItem === clickedListItem)
    
    // Assign the List Item Name directly.
    // clickedPortfolioName = clickedListItem;    
    // console.log('This is the clicked Portfolio Name: ', clickedPortfolioName)

    // Inner Page Object
    // clickedPortfolioData = portfolioData[clickedListItem];
    // Array.prototype.map.call((portfolioData, data) => {
    //   if (data.name === clickedListItem) {
    //     clickedPortfolioData = data.name
    //   }
    // })

    setclickedPortfolioData(portfolioData[clickedListItem])
    setclickedPortfolioDataImage(clickedPortfolioData.image)
   
  }  

  return (
    <div className="section" id="portfolio">
      <div className="section__heading_container">
        <h1 className="section__heading">Portfolio</h1>
      </div>
      
      <div className="section_contents portfolio_contents">

        
        <div className="portfolio_list_container">          
          <div className="portfolio_title">Portfolio List</div>
          
          
          <div className="portfolio_list" ref={portfolioList}>
            <div className="portfolio_list__background">                           

              {Object.entries(portfolioData).map((portfolio)=>(
                <>
                  <div 
                  className="portfolio_list__item" 
                  onClick={e => setPortfolio(portfolio[1].name)}
                   >
                    <div className="portfolio_name">
                      {portfolio[1].name}
                    </div>   
                    <div 
                      className="portfolio_skill"> 
                      Made with: {portfolio[1].skill}
                    </div>   
                    <div className="go_url"><a href={portfolio[1].url}>Go Hosted URL</a></div>
                  </div>      
                  
               </>
              // console.log(portfolio)     
              ))
              }

            </div>
              
          </div>
          
          
        </div>    
         
        {clickedPortfolioData.image && console.log(clickedPortfolioData.image)}
        
        {clickedPortfolioData.image ? (
          <> 
            <div className="portfolio_data_container">
              <div className="portfolio_title">{clickedPortfolioData.name}</div>     
              <img 
              className="portfolio_image"
              src={clickedPortfolioData.image} 
              style={
                {
                // padding: '18px 0',
                width: '80%',
                height: '70%',
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
          ) : (          
            // <div></div>
            <div className="portfolio_data_container">
              <div className="portfolio_title">{portfolioData['Beat Box'].name}</div>     
              <img 
              className="portfolio_image"
                src={portfolioData['Beat Box'].image} 
                style={
                  {
                  // padding: '18px 0',
                  width: '80%',
                  height: '70%',
                  overflow: 'scroll'
                }
                }  
              />
            </div>          
          )
        }              

      </div>

      <p className="image_source">
        <a href="https://images.unsplash.com/photo-1529444161959-5690000911bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">Image Source</a>
      </p>
    </div>  
  )
}

export default Portfolio
