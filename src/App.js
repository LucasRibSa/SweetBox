import React from 'react';
import './App.css';  
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Quadro from './components/Quadro/Quadro';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Quadro />
      <Footer />
    </div>
  );
}

export default App;
