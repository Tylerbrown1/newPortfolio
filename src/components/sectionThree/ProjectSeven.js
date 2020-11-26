/** @format */

import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  height: 60vh;
  padding: 2rem 0 2rem 0;
`;

const ContentDiv = styled.div`
  flex: 1;
  padding-right: 1rem;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const ImgDiv = styled.div`
  flex: 1;
  background-image: url("/lasteak.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>La Steak</h2>
        <h5 style={{ color: "#fff" }}>Technologies used: Webflow</h5>
        <p style={{ color: "#fff" }}>A local steak house website.</p>
      </ContentDiv>
      <ImgDiv></ImgDiv>
    </MainDiv>
  );
};

export default ProjectOne;
