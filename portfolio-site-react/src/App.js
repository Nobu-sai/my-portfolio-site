import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home.js'
import ResumePDF from './components/ResumePDF/ResumePDF.js';
import PublicCommitment from './components/PublicCommitment/PublicCommitment.js';
import './App.css'



function App() {
  
  return (
    // <div className="App">  
      <Router>
        <div className="App">
          {console.log("Description about my way of noting with SIGNS in this Console like underneath.")}
          {console.log("  * = My understanding about A line of code for the process to log the Value.")}
          {console.log("  ... = My understanding about LINES of code for a group of process.")}
          <Switch>
            <Route path="/resume_pdf">
              <ResumePDF />                        
            </Route>    
            <Route path="/public_commitment">
              <PublicCommitment />                        
            </Route>    
            
            <Route path="/">
              <Home 
                pdf_link={
                  <Link to="/resume_pdf">Resume (PDF)</Link>
                }
                public_commitment={
                  <Link to="/public_commitment">Public Commitment</Link>
                }
              />        
            </Route>    
          </Switch>
        </div>
                    
      </Router>

    // </div>
  );

}

export default App;
