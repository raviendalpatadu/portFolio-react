import React from "react";
import Navbar from './screens/Navbar';
import HomePage from './screens/HomePage';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import Education from './screens/Education';
import Contact from './screens/Contact';
import Footer from './screens/FooterMy';

function App() {
  return (
    <>
    <Navbar />
    <HomePage />
    <AboutMe />
    <Projects />
    <Education />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
