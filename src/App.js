import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <span class="material-icons">face</span>
        <h1>Example heading <span class="badge bg-secondary">New</span></h1> */}
      </header>
    </div>
  );
}

export default App;
