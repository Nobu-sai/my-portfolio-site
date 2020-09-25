import React from 'react'
import '../style/section.css';
import '../style/portfolio.css';

function Portfolio() {
  return (
    <div className="section" id="portfolio">
      <div className="section__heading_container">
        <h1 className="section__heading">Portfolio</h1>
      </div>
      

      <div className="section_contents portfolio_contents">

        
        <div className="portfolio_list_container">          
          <div className="portfolio_title">Portfolio List</div>
          
          
          <div className="portfolio_list">
            <div className="portfolio_list__background">
            
              <div className="portfolio_list__item"><a href="./portpholio-pages/blog-app_ex_1/my-blog-app /index.html">Blog App</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/FormValidationWay1Ex1/index.html">Form Validation</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/Google-Map-Store-Locator/">Google Map Store Locator</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/GuessTheNumber_Ex_1/index.html">Guess Number Game</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/ImageSlider_Ex_1/absorb_1/index.html">Image Slider</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/SortIMDBMovieDatabase/Arrange_1/index.html">Movie List Sorting App</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/TabPanelWidget_Ex_1/Mastery_Absorb_1/index.html">Tab Panel Widgit</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/TextEditor_Ex_1/Arrange_1/index.html">Text Editor</a></div>
              <div className="portfolio_list__item">
                <a href="../portpholio-pages/toys-chest/toy-chest_index.html">Toy Chest</a>
                <p>Contents: Cat Image Generator, Rock Scisor Papaer, Button Color Changer, BlackJack</p>
              </div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/twitter_clone/twitter_clone_app/index.html">Twitter Clone</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/Weather App_Ex_1/Arrange_1/index.html">Weather App</a></div>
            </div>
              
          </div>
          
          
        </div>        
            
        
        <div className="portfolio_image_container">
          <div className="portfolio_title">Blog App</div>
          
          <div className="portfolio_image"></div>     
          
              
        </div>
        
      </div>
    </div>  
  )
}

export default Portfolio
