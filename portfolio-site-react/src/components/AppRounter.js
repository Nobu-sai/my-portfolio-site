import React from 'react';
import PageMenu from './PageMenu.js';
import AboutMe from './AboutMe.js';
import Skill from './Skill.js';
import Header from './Header.js';
import Portfolio from './Portfolio.js';
import ScrollUp from './ScrollUp.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import './App.css' ;


function AppRouter() {
  
  return (
    <div className="App">      
      <Router>
        <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about_me">About Me</Link>
            </li>
            <li>
              <Link to="/skill">Skill</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
          </ul>
        </nav>

          {/* <Header />          */}
          
          <PageMenu/>           
              

          <Switch>
            <Route path="/home">
             <Header />    
            </Route>
            <Route path="/about_me">
              <AboutMe />
            </Route>
            <Route path="/skill">
              <Skill />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
        </Switch>

        {/* <ScrollUp /> */}
        </div>
        
      </Router>
    
      

    </div>
  );
}

export default AppRouter;
