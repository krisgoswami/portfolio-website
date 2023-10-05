import styled from 'styled-components'
import './App.css'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Works from './components/Works'

const Conatiner = styled.div`
height: 100vh;
background-color: rebeccapurple; 
`;

function App() {

  return (
    <>
      <Conatiner>
        <Hero />
        <Works />
        <Contact />
      </Conatiner>
    </>
  )
}

export default App
