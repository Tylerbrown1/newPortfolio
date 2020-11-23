/** @format */

import React from "react";
import styled from "styled-components";
import data from "./ProjectData";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Zoom from "react-reveal/Zoom";

const Section = styled.section`
  background-color: #3d405b;
  height: 100%;
`;
const Container = styled.div`
  padding: 0 7.4%;
  display: flex;
  flex-direction: row;

  flex-wrap: wrap;
  justify-content: center;
`;
const Card = styled.div`
  width: 15rem;
  height: 20rem;
  background-color: #6a947f;
  border-radius: 0.5rem;
  margin: 1rem;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const CardDiv = styled.div`
  height: 50%;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;
const Heading4 = styled.h4`
  color: #f2cc8f;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  height: 24px;
  margin: 0;
`;
const Heading1 = styled.h1`
  color: #3d405b;
  font-size: 18px;

  font-family: "Alfa Slab One";
  margin: 0;
`;
const Button = styled.button`
  padding: 5px 20px;
  border-color: black;
  border: 2px solid #f2cc8f;
  background: transparent;
  text-decoration: none;
  color: #3d405b;
  font-size: 16px;
  border-radius: 0.5rem;

  &:hover {
    background-color: #3d405b;
    color: #f2cc8f;
    border: none;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 1rem;
`;
const SecondCardDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 10rem;
  justify-content: center;
`;

function SectionThree() {
  return (
    <Section>
      <h1
        style={{
          margin: "0",
          padding: "2rem",
          textAlign: "center",
          color: "#f2cc8f",
        }}
      >
        Projects
      </h1>
      <Container>
        {data.projects.map((project) => (
          <div>
            <Zoom>
              <Card>
                <CardDiv>
                  <Img src={project.image} alt="" />
                </CardDiv>
                <SecondCardDiv>
                  <Heading4>{project.h4}</Heading4>
                  <Heading1>{project.h1}</Heading1>
                  <ButtonDiv>
                    <Button>
                      <a
                        style={{ textDecoration: "none", color: "#3d405b" }}
                        href={project.live}
                      >
                        Live
                      </a>
                    </Button>
                    <Button>
                      <a
                        style={{ textDecoration: "none", color: "#3d405b" }}
                        href={project.github}
                      >
                        Github
                      </a>
                    </Button>
                  </ButtonDiv>
                </SecondCardDiv>
              </Card>
            </Zoom>
          </div>
        ))}
      </Container>
    </Section>
  );
}

export default SectionThree;
