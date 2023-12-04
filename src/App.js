import React from 'react';
import './App.css';  
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Quadro from './components/Quadro/Quadro';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Quadro />
    </div>
  );
}

export default App;
