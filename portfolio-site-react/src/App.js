import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ResumePDF from './components/ResumePDF/ResumePDF.js';
import Home from './Home.js'
import './App.css'



function App() {
  
  return (
    // <div className="App">  
      <Router>
        <div className="App">
          <Switch>
            <Route path="/resume_pdf">
              <ResumePDF />          
            </Route>    
            
            <Route path="/">
              <Home link_1={<Link to="/resume_pdf">Resume (PDF)</Link>}/>        
            </Route>    
          
          </Switch>
        </div>
                    
      </Router>

    // </div>
  );

}

export default App;
