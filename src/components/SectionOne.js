/** @format */

import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/background.png");
  height: 100vh;
`;
const Container = styled.div`
  padding: 0 10%;
  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
  }
`;
const SectionDiv = styled.div`
  display: flex;
  text-align: center;
`;
const Column = styled.div`
  flex: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media (max-width: 500px) {
    text-align: center;
  }
`;
const Column2 = styled.div`
  flex: 50%;

  background-repeat: none;
  background-size: cover;
  height: 100vh;
  background-position: center;
  @media (max-width: 500px) {
    display: none;
  }
`;
const Heading4 = styled.h4`
  color: #f2cc8f;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  height: 24px;
  margin: 0;
  letter-spacing: 1.5px;
`;
const Heading1 = styled.h1`
  color: #3d405b;
  font-size: 80px;
  letter-spacing: 4.5px;
  font-family: "Alfa Slab One";
  margin: 0;
`;
const Heading5 = styled.h5`
  color: #3d405b;
`;
const Img = styled.img`
  position: absolute;
  width: 60%;
  bottom: 0;
  right: 0;
`;
export const Scrolldown = styled.div`
  font-size: 10px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 5px;
  color: #f2cc8f;
  position: absolute;
  bottom: 113px;
  left: -60px;
  transform: rotate(-90deg);

  ::before {
    content: "";
    border: 1px solid #f2cc8f;
    width: 100px;
    margin: 0 20px 0 0;
    transform: translateY(-3px);
    opacity: 0.5;
    display: inline-block;
  }
  @media (max-width: 820px) {
    display: none;
  }
`;

function SectionOne() {
  return (
    <Section>
      <Container>
        <Scrolldown>ScrollDown</Scrolldown>
        <SectionDiv>
          <Column>
            <Heading4>Hello, I'm</Heading4>
            <Heading1>
              Tyler <br /> Brown
            </Heading1>
            <Heading5>Front-End Developer</Heading5>
          </Column>

          <Column2>
            <Img src="/head.png" alt="" />
          </Column2>
        </SectionDiv>
      </Container>
    </Section>
  );
}

export default SectionOne;
