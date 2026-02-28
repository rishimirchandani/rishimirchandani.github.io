import React from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ConcertsPage from './pages/ConcertsPage';
import MediaPage from './pages/MediaPage';
import ContactPage from './pages/ContactPage';
import { Mixpanel } from './Mixpanel';
import './App.css';

function AppContent() {
  const location = useLocation();
  
  return (
    <div className="App">
      <Navbar />
      <Switch location={location}>
        <Route exact path="/" component={() => {
          Mixpanel.track('home');
          return <HomePage />;
        }} />
        <Route path="/bio" component={() => {
          Mixpanel.track('bio');
          return <AboutPage />;
        }} />
        <Route path="/concerts" component={() => {
          Mixpanel.track('concerts');
          return <ConcertsPage />;
        }} />
        <Route path="/media" component={() => {
          Mixpanel.track('media');
          return <MediaPage />;
        }} />
        <Route path="/contact" component={() => {
          Mixpanel.track('contact');
          return <ContactPage />;
        }} />
      </Switch>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
