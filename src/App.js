import React from 'react';
import './App.css';
// import Homepage from "./components/Homepage";
import Nav from "./components/Nav"
import {
  BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>    
      </Router>
    </div>
  );
}

export default App;

