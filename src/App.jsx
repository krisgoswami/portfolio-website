import React, { useRef } from 'react';
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Works from './components/Works'
import AboutMe from './components/About'
import Skills from './components/Skills'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  const aboutMeRef = useRef(null);
  const mySkillsRef = useRef(null);
  const myWorksRef = useRef(null);
  const contactMeRef = useRef(null);

  const handleAboutMeClick = () => {
    aboutMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMySkillsClick = () => {
    mySkillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleMyProjectsClick = () => {
    myWorksRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleContactClick = () => {
    contactMeRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Conatiner>
        <Navbar
          handleAboutMeClick={handleAboutMeClick}
          handleMySkillsClick={handleMySkillsClick}
          handleMyProjectsClick={handleMyProjectsClick}
          handleContactClick={handleContactClick}
        />
        <Hero />
        <AboutMe ref={aboutMeRef} />
        <Skills ref={mySkillsRef} />
        <Works ref={myWorksRef} />
        <Contact ref={contactMeRef} />
        <Footer />
      </Conatiner>
    </>
  )
}

export default App
