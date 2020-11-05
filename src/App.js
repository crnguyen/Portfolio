import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch as Switch2 } from 'react-router-dom';
import About from "./components/About"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Switch2>
        <Route path='/about' component={About} />
      </Switch2>
    </div>
  );
}

export default App;
