/** @format */

import React from "react";
import ProjectOne from "./ProjectOne";
import styled from "styled-components";
import ProjectTwo from "./ProjectTwo";
import ProjectThree from "./ProjectThree";
import ProjectFour from "./ProjectFour";
import ProjectFive from "./ProjectFive";
import ProjectSix from "./ProjectSix";
import ProjectSeven from "./ProjectSeven";
import ProjectEight from "./ProjectEight";
import ProjectNine from "./ProjectNine";

const Container = styled.div`
  padding: 0 7.4%;
  text-align: center;
  background-color: #3d405b;
`;

const SectionThree = () => {
  return (
    <Container>
      <h1 style={{ margin: "0" }}>Projects</h1>
      <ProjectOne />
      <ProjectTwo />
      <ProjectThree />
      <ProjectFour />
      <ProjectFive />
      <ProjectSix />
      <ProjectSeven />
      <ProjectEight />
      <ProjectNine />
    </Container>
  );
};

export default SectionThree;
