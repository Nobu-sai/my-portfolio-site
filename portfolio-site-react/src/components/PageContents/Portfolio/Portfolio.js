import React, { useState } from 'react'
// import PortfolioData from './PortfolioData';
import Heading from '../../Heading/Heading.js'

import '../Section.css';
import './Portfolio.css';
// import '../style/PortfolioData.css';

// Porfolio Images
import beatBoxImage from '../../../assets/portfolio-image/beat-box.png';
import blogAppImage from '../../../assets/portfolio-image/blog-app.png';
import drawingBordersAnimationImage from '../../../assets/portfolio-image/drawing-borders-animation.png';
import googleMapStoreLocatorImage from '../../../assets/portfolio-image/google-map-store-locator.png'
import guessNumberGameImage from '../../../assets/portfolio-image/guess-number-game.png';
import imageSliderImage from '../../../assets/portfolio-image/image-slider.png';
import movieListImage from '../../../assets/portfolio-image/movie-list.png';
import tabPanelWidgetImage from '../../../assets/portfolio-image/tab-panel-widget.png';
import textEditorImage from '../../../assets/portfolio-image/text-editor.png';
import toyChestImage from '../../../assets/portfolio-image/toy-chest.png';
import twitterCloneImage from '../../../assets/portfolio-image/twitter-clone.png';
import weatherAppImage from '../../../assets/portfolio-image/weather-app.png';

// Skill Icons
// import htmlIcon from '../assets/skill-icon/html5.svg';
// import cssIcon from '../assets/skill-icon/css3.svg';
// import bootstrapIcon from '../assets/skill-icon/bootstrap.svg';
// import jsIcon from '../assets/skill-icon/js.svg';
// import reactjsIcon from '../assets/skill-icon/reactjs.svg';
// import nodejsIcon from '../assets/skill-icon/nodejs.svg';
// import expressjsIcon from '../assets/skill-icon/expressjs.svg';
// import firebaseIcon from '../assets/skill-icon/firebase.svg';
// import mongodbIcon from '../assets/skill-icon/mongodb.svg';
// import figmaIcon from '../assets/skill-icon/figma.svg';




function Portfolio() {

  const [clickedPortfolioData, setclickedPortfolioData] = useState({})
  // const [clickedPortfolioDataImage, setclickedPortfolioDataImage] = useState("")

  const portfolioData = {
    'Beat Box': {
      name: 'Beat Box',
      url: 'https://beat-box-js.firebaseapp.com/',
      image: beatBoxImage,
      imagePrefix: 'beat-box',
      skill: "HTML, CSS, JS",
      user_story: 'You can play Beats with your keybord.',
      dev_story: "Used JS Classes and Audio Objects.",
    },
    'Blog App': {
      name: 'Blog App',
      url: 'https://blog-app-31ad0.firebaseapp.com/',
      image: blogAppImage,
      imagePrefix: 'blog-app',
      skill: 'HTML, CSS, JS, Node.js, Express.js',
      user_story: 'You can post Blogs and Sort and View them',
      dev_story: "Created Local API with Node.js and Express.js",
    },
    'Drawing Borders Animation': {
      name: 'Drawing Borders Animation',
      url: 'https://drawing-animaiton.firebaseapp.com/',
      image: drawingBordersAnimationImage,
      imagePrefix: 'drawing-borders-animation',
      skill: 'HTML, CSS, JS',
      user_story: 'Random Borders are drawn by clicking the button',
      dev_story: "Used HTML canvas Tag and JS animations",
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
      imagePrefix: 'google-map-store-locator',
      skill: 'HTML, CSS, JS, Node.js, MongoDB, Google Map API',
      user_story: "You can search Starbacks by ZIP Code. (Near LA only.)",
      dev_story: "Used Google Map API",
    },
    'Guess Number Game': {
      name: 'Guess Number Game',
      url: 'https://guess-number-game-js.firebaseapp.com/',
      image: guessNumberGameImage,
      imagePrefix: 'guess-number-game',
      skill: 'HTML, CSS, JS',
      user_story: 'You can play guessing random number from -100 to 100.',
      dev_story: "Used JS for getting random numbers and replacing HTML",
    },
    'Image Slider': {
      name: 'Image Slider',
      url: 'https://image-slider-jquery.firebaseapp.com/',
      image: imageSliderImage,
      imagePrefix: 'image-slider',
      skill: 'HTML, CSS, JS, jQuery',
      user_story: 'You can travel the earth virtually.',
      dev_story: "Used jQuery for Sliding Animation",
    },
    'Movie List': {
      name: 'Movie List',
      url: 'https://movie-list-c0ae3.web.app/',
      image: movieListImage,
      imagePrefix: 'movie-list',
      skill: 'HTML, CSS, JS',
      user_story: 'You can view and sort a list of movie titles.',
      dev_story: "Used JS for sorting list like with Object and Loop",
    },
    'Tab Panel Widget': {
      name: 'Tab Panel Widget',
      url: 'https://tab-panel-widget.firebaseapp.com/',
      image: tabPanelWidgetImage,
      imagePrefix: 'tab-panel-widget',
      skill: 'HTML, CSS, JS, jQuery',
      user_story: 'You can control Panels to see by the relevant Tab.',
      dev_story: "Used jQuery for moving around Panels by Tabs",
    },
    'Text Editor': {
      name: 'Text Editor',
      url: 'https://text-editor-ca31a.firebaseapp.com/',
      image: textEditorImage,
      imagePrefix: 'text-editor',
      skill: 'HTML, CSS, JS',
      user_story: 'You can write texts and change their styles',
      dev_story: "Use JS and CSS for grabbing text and change styles.",
    },
    'Toy Chest': {
      name: 'Toy Chest',
      url: 'https://toy-chest-ef2ab.firebaseapp.com/',
      image: toyChestImage,
      imagePrefix: 'toy-chest',
      skill: 'HTML, CSS, JS',
      user_story: 'You can play many Toys.',
      dev_story: "Used JS for the game control",
    },
    'Twitter Clone': {
      name: 'Twitter Clone',
      url: 'https://twitter-clone-e0f03.firebaseapp.com/',
      image: twitterCloneImage,
      imagePrefix: 'twitter-clone',
      skill: 'HTML, CSS, JS, Node.js, Express.js, Twitter API',
      user_story: 'You can search Tweets from whatever word you want.',
      dev_story: "Used Twitter API for getting tweets.",
    },
    'Weather App': {
      name: 'Weather App',
      url: 'https://weather-app-832c9.firebaseapp.com/index.html',
      image: weatherAppImage,
      imagePrefix: 'weather-app',
      skill: 'HTML, CSS, JS, OpenWeather API',
      user_story: 'You can search weather from a city name.',
      dev_story: "Used openweather API for weather data",
    }
  }
  



  const setPortfolio = (clickedListItem) => {

    setclickedPortfolioData(portfolioData[clickedListItem])
    // setclickedPortfolioDataImage(` + require(../../../assets/portfolio-image/${clickedPortfolioData.imagePrefix}.png) + `)
    
   
  }  

  return (
    <div className="section" id="portfolio">
      <Heading  content="Portfolio" />

      <div className="section_contents portfolio_contents">

        
        <div className="portfolio_list_container">                   
          
          <div className="portfolio_list">            
            <div className="portfolio_list__background">              
             {/* <div className="scroll_message">Scroll down for the next portfolio.</div> */}


              {Object.entries(portfolioData).map((portfolio, i)=>(
                <>
                {/* {console.log(portfolio)} */}
                  <div 
                  className="portfolio_list__item" 
                  id={i}
                  onClick={e => setPortfolio(portfolio[1].name)}
                   >
                     <div className="portfolio_list__title">
                          {portfolio[1].name}
                    </div>   
                     <div className="portfolio_data"> 
                      <div className="portfolio_data__item">
                       <div 
                          className="portfolio_data__title"> 
                          Skill<br/> <span className="portfolio_skill__name"> {portfolio[1].skill}.</span>
                        </div> 
                      </div>

                      <div className="portfolio_data__item">
                        <div>
                            <div className="portfolio_data__title">
                              Webpage
                            </div>
                            <a 
                              href={portfolio[1].url}
                              className="visit_url_container"                            
                            >
                              <span className="visit_url">Visit.</span> 
                            </a>
                          </div>
                      </div>
                                             
                      
                     </div>
                    
                  </div>      
                  
               </>
              ))
              }
        
            </div>
              
          </div>
          
          
        </div>    
         
        {clickedPortfolioData.image && console.log(clickedPortfolioData.image)}
        
        {clickedPortfolioData.image ? (
          <> 
            <div className="portfolio_desc_container">
              <div className="portfolio__heading">{clickedPortfolioData.name}</div>  
              <div className="explanation">
                <div className="user_story">
                  <div className="user_story__heading">User Story:</div> 
                  <div className="user_story__text">{clickedPortfolioData.user_story}</div>
                  </div>
                  <div className="dev_story">
                  <div className="dev_story__heading">User Story:</div> 
                  <div className="dev_story__text">{clickedPortfolioData.dev_story}</div>
                  </div>  
              </div>
        
              <div 
              className="portfolio_image" 
              style={
                {  
                    backgroundImage: 'url(' + require(`../../../assets/portfolio-image/${clickedPortfolioData.imagePrefix}.png`) + ')' ,   
                    // backgroundImage: 'url(' + require(clickedPortfolioDataImage) + ')' ,   
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
              ></div>                
            </div>
          </>      
          ) : (          
            // <div></div>
            <div className="portfolio_desc_container">
              <div className="portfolio__heading">{portfolioData['Beat Box'].name}</div>    
              <div className="explanation">
                <div className="user_story">
                  <div className="user_story__heading">User Story:</div> 
                  <div className="user_story__text">You can play beats with your keybord.</div>
                </div>
                <div className="dev_story">
                  <div className="dev_story__heading">Dev Story:</div> 
                  <div className="dev_story__text">Used JS Classes and Audio Objects.</div>
                </div>
              </div> 
    
              {/* {console.log(portfolioData['Beat Box'].image)} */}
              <div 
              className="portfolio_image" 
              style={
                { 
                    // position: 'relative',
                    // backgroundImage:`url(${portfolioData['Beat Box'].image}})`,
                    // backgroundImage: 'url(' + require('../../../assets/portfolio-image/beat-box.png') + ')' ,   
                    backgroundImage: 'url(' + require(`../../../assets/portfolio-image/${portfolioData['Beat Box'].imagePrefix}.png`) + ')' ,  
                    backgroundSize: 'cover',                                             
                    backgroundPosition: 'center',
        
                }}
              ></div>       

            </div>          
          )
        }              

      </div>

    </div>  
  )
}

export default Portfolio
