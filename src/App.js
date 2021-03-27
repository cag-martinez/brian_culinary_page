import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import AboutMe from "./components/about/AboutMe";
import Navbar from "./components/navbar/Navbar";
import Pictures from "./components/pictures/Pictures";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <AboutMe />
      <Pictures />
    </div>
  );
}

export default App;
