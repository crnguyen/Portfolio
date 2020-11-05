import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import Contributions from "./components/Contributions";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to my portfolio!
        </h1>
      </header>
      <Router>
        <Nav/>
          <Route path='/About' component={About} />
          <Route path='/Skills' component={Skills} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contributions' component={Contributions} />
          <Route path='/Contact' component={Contact} />

          {/* <Route path='/nav' component={Nav} /> */}
      </Router>
     
    </div>
  );
}

export default App;
