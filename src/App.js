import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About"
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to my portfolio!
        </h1>
      </header>
      <Router>
          <Route path='/about' component={About} />
          <Route path='/skills' component={Skills} />
      </Router>
     
    </div>
  );
}

export default App;
