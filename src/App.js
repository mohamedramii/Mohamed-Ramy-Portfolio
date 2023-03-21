import styled from "styled-components";
import {Hero, Contact, Who, Works} from './imports'
import bgimg from ".//img/bg.jpeg";
import { useRef } from "react";


const Container = styled.div`
  height: 100vh;
  color: white;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  background-image: url(${bgimg});
`;


function App() {

  const contactref=useRef(null);
  const AboutMeref=useRef(null);
  const Skillsref=useRef(null);

  return (
    <Container>
      <Hero vh4={contactref} AboutMeref={AboutMeref} Skillsref={Skillsref} />
      <Who ref={AboutMeref} />
      <Works ref={Skillsref} />
      <Contact ref={contactref} />
    </Container>
  );
}

export default App;
