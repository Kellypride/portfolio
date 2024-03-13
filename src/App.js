import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/resume';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contacts';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Home / >
        <About />
        <Resume / >
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
