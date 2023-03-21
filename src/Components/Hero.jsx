import React, { Suspense, useRef } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import lineImg from "../img/line.png";
import moonimg from "../img/moon.png";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import scrollDown from "../img/scrolldownsvg.svg"

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    flex: 1;

    align-items: center;
  }
`;

const SideBtn = styled.div`
  display: flex;
  gap: 30px;
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    text-align: center;
    margin-top: -2rem;
  }
`;

const WhatweDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 800px;
  height: 600px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 100px;
  left: 0;
  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;
  @media only screen and (max-width: 768px) {
    width: 390px;
    height: 300px;
  }
  @keyframes animate {
    to {
      transform: translateY(60px);
    }
  }
`;
const Center = styled.div`
  display: none;
  @media only screen and (max-width: 768px) {
    display: flex;
    flex: 1;
    width: 100%;
    max-height: 4rem;
    border: 1px solid red ;
    position: relative;
    margin-top: 1rem;
    ${Img} {
      animation: scroll 1.8s infinite  ;

      @keyframes scroll {
        78% {
          transform: translateY(35px);
        }
      }
    }
  }
`;
const Hero = ({ vh4, AboutMeref, Skillsref }) => {
  return (
    <Section>
      <Navbar vh4={vh4} AboutMeref={AboutMeref} Skillsref={Skillsref} />
      <Container>
        <Left>
          <Title>
            Hello, I'm <br />
            Mohamed Ramy
          </Title>
          <WhatweDo>
            <Line src={lineImg} />
            <Subtitle>
              I'm a Front End Developer
              <span style={{ color: "#fff" }}> & </span>
              Software Engineer
            </Subtitle>
          </WhatweDo>
          <SideBtn>
            <Button
              type='button'
              onClick={() =>
                vh4.current.scrollIntoView({ behavior: "smooth" })
              }>
              Contact Me
            </Button>

            <a
              style={{ textDecoration: "none" }}
              href='Mohamed Ramy Resume.pdf'
              download>
              <Button style={{ display: "flex", width: "7rem" }} type='button'>
                Download CV
              </Button>
            </a>
          </SideBtn>
          <Center>
            <Img style={{width:"3rem"}} src={scrollDown} />
          </Center>
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color='#3d1c56'
                  attach='material'
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>
          <Img src={moonimg} />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
