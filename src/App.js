import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import AboutMe from "./components/about/AboutMe";
import Navbar from "./components/navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
    </div>
  );
}

export default App;
