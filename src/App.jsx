import styled from 'styled-components'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Works from './components/Works'
import AboutMe from './components/About'

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

  return (
    <>
      <Conatiner>
        <Hero />
        <AboutMe />
        <Works />
        <Contact />
      </Conatiner>
    </>
  )
}

export default App
