import React, { forwardRef, Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Certificate from "./Certificate";
const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;
  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
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
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Who = forwardRef((props,AboutMeref) => {
  return (
    <Section ref={AboutMeref}>
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 40 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.8} />
              <directionalLight position={[3, 2, 1]} />
              <Certificate />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>About me</Title>

          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>
              React.js Development Cross Skilling (Web Front-End)
            </Subtitle>
          </WhatWeDo>
          <Desc>Nanodegree Program By EFWD</Desc>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>Software Testing Foundations </Subtitle>
          </WhatWeDo>
          <Desc>Scholarship By EFWD</Desc>
          <WhatWeDo>
            <Line src='./img/line.png' />
            <Subtitle>
              Competition between Egypt and Tunisia an outstanding performance
              in the AI and winning 3rd place with the project "Virtual Quiz
              Game"
            </Subtitle>
          </WhatWeDo>
          <Desc>IEEE Certificate</Desc>

          <a
            style={{ textDecoration: "none" }}
            href='Mohamed Ramy Resume.pdf'
            download>
            <Button style={{ display: "flex", width: "7rem" }} type='button'>
              Download CV
            </Button>
          </a>
        </Right>
      </Container>
    </Section>
  );
})

export default Who