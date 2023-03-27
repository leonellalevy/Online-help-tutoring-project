import React from 'react';
import styled from 'styled-components';
import { Container, Typography, Button } from '@material-ui/core';

const Hero = styled.section`
  background-color: #f0f0f0;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroText = styled(Typography)`
  font-size: 3rem;
  text-align: center;
`;

const CallToAction = styled(Button)`
  margin-top: 2rem;
`;

function App() {
  return (
    <>
      <Hero>
        <Container maxWidth="md">
          <HeroText variant="h1">Welcome to my website</HeroText>
          <HeroText variant="subtitle1">
            I am building a web application using React.js and other awesome tools!
          </HeroText>
          <CallToAction variant="contained" color="secondary">
            Get started
          </CallToAction>
        </Container>
      </Hero>
    </>
  );
}

export default App;