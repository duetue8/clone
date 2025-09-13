import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import LoanForm from './components/LoanForm';
import About from './components/About';
import Services from './components/Services';
import Stats from './components/Stats';
import Benefits from './components/Benefits';
import HowItWorks from './components/HowItWorks';
import APRTable from './components/APRTable';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LoanForm />
      <About />
      <Services />
      <Stats />
      <Benefits />
      <HowItWorks />
      <APRTable />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;