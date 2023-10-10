import styled from 'styled-components'
import React, { useRef } from 'react';
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Works from './components/Works'
import AboutMe from './components/About'
import Skills from './components/Skills'
import Navbar from './components/Navbar';

const Conatiner = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  background: url("./images/bg.jpg");
  color: white;
  overflow-y: auto;
  scrollbar-width: none;
  ::-webkit-scrollbar{
    display: none;
  }
`;


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
      </Conatiner>
    </>
  )
}

export default App
