import React from 'react';
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Quotes from './components/Quotes'
import Media from './components/Media'
import Events from './components/Events'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Wide from './components/Wide'
import { Mixpanel } from './Mixpanel'
import './App.css';

function App() {
  Mixpanel.track('home');
  return (
      <div className="App">
          <Navbar />
          <Hero src="/hero.png" credit="Photo: Titilayo Ayangade" />
          <Quotes />
          <About />
          <Events />
          <Media />
          <Wide src="/pan.png"/>
          <Contact />
          <Footer />
      </div>
  );
}

export default App;
