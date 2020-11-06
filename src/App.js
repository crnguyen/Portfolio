import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from "react-router-dom";
import Homepage from "./components/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Welcome to my portfolio!
        </h1>
      </header>
      <Homepage/>
     
    </div>
  );
}

export default App;
