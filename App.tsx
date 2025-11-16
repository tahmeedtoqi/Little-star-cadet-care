import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Features from './components/Features';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Features />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
