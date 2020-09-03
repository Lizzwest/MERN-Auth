import React from 'react';
import logo from './logo.svg';
import Welcome from "./components/Welcome"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./components/About"
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Footer />

    </div>
  );
}

export default App;
