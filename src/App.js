import React from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Media from './components/Media'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Wide from './components/Wide'
import './App.css';

function App() {
  return (
      <div className="App">
          <Navbar />
          <Hero src="/hero.png"/>
          <About />
          <Media />
          <Wide src="/pan.png"/>
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
