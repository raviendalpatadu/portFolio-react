import React, {useEffect} from "react";
import Navbar from './common/Navbar';
import HomePage from './screens/HomePage';
import AboutMe from './screens/AboutMe';
import Projects from './screens/Projects';
import Education from './screens/Education';
import Contact from './screens/Contact';
import Footer from './screens/FooterMy';
import AOS from 'aos';
import 'aos/dist/aos.css';



function App() {

  useEffect(() => {
    AOS.init();
  }, []);

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
