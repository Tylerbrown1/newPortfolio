/** @format */

import React from "react";
import styled from "styled-components";

const Boxs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70vh;
  background-color: #6a947f;
  text-align: center;
  justify-content: space-evenly;
  align-items: center;
`;

const SkillP = styled.p`
  color: #fff;
  font-size: 1rem;
`;

const Skills = () => {
  return (
    <Boxs>
      <div>
        <SkillP>React</SkillP>
        <SkillP>JavaScript</SkillP>
        <SkillP>HTML/CSS</SkillP>
        <SkillP>Node</SkillP>
        <SkillP>SQL</SkillP>
        <SkillP>Figma</SkillP>
        <SkillP>GASP</SkillP>
      </div>
      <div>
        <SkillP>MondgoDB</SkillP>
        <SkillP>Redux</SkillP>
        <SkillP>Express.js</SkillP>
        <SkillP>Firebase</SkillP>
        <SkillP>Python</SkillP>
        <SkillP>Photoshop</SkillP>
        <SkillP>Debugging</SkillP>
      </div>
    </Boxs>
  );
};

export default Skills;
