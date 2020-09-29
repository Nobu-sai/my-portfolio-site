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
            
              <div className="portfolio_list__item"><a href="https://beat-box-js.firebaseapp.com/">Beat Box</a></div>
              <div className="portfolio_list__item"><a href="https://blog-app-31ad0.firebaseapp.com/">Blog App</a></div>
              <div className="portfolio_list__item"><a href="https://drawing-animaiton.firebaseapp.com/">Drawing Borders Animation</a></div>
              <div className="portfolio_list__item"><a href="https://form-validation-1c872.firebaseapp.com/">Form Validation</a></div>
              <div className="portfolio_list__item"><a href="../portpholio-pages/Google-Map-Store-Locator/">Google Map Store Locator</a></div>
              <p>* Currently unfuncitoning</p>
              <div className="portfolio_list__item"><a href="https://guess-number-game-js.firebaseapp.com/">Guess Number Game</a></div>
              <div className="portfolio_list__item"><a href="https://image-slider-jquery.firebaseapp.com/">Image Slider</a></div>
              <div className="portfolio_list__item"><a href="https://movie-list-c0ae3.web.app/">Movie List</a></div>
              <div className="portfolio_list__item"><a href="https://tab-panel-widget.firebaseapp.com/">Tab Panel Widgie</a></div>
              <div className="portfolio_list__item"><a href="https://text-editor-ca31a.firebaseapp.com/">Text Editor</a></div>
              <div className="portfolio_list__item">
                <a href="https://toy-chest-ef2ab.firebaseapp.com/">Toy Chest</a>
                <p>Contents: Cat Image Generator, Rock Scisor Papaer, Button Color Changer, BlackJack</p>
              </div>
              <div className="portfolio_list__item"><a href="https://twitter-clone-e0f03.firebaseapp.com/">Twitter Clone</a></div>
              <p>* Temporarily unfuncitoning</p>
              <div className="portfolio_list__item"><a href="https://weather-app-832c9.firebaseapp.com/index.html">Weather App</a></div>
            </div>
              
          </div>
          
          
        </div>        
            
        
        <div className="portfolio_image_container">
          <div className="portfolio_title">Blog App</div>
          
          <div className="portfolio_image"></div>     
          
              
        </div>
        
      </div>

      <p className="image_source">
        <a href="https://images.unsplash.com/photo-1529444161959-5690000911bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80">Image Source</a>
      </p>
    </div>  
  )
}

export default Portfolio
