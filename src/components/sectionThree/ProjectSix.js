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
  padding-left: 1rem;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const ImgDiv = styled.div`
  flex: 1;
  background-image: url("/prominent.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ImgDiv></ImgDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>Prominent Limousine</h2>
        <h5 style={{ color: "#fff" }}>Technologies used: Webflow</h5>
        <p style={{ color: "#fff" }}>
          The friend I was working with wanted something they could easily use
          and maintain. The solution was webflow. I did all the HTML and CSS and
          showed him how to upload new pictures and adjust colors/text.
        </p>
      </ContentDiv>
    </MainDiv>
  );
};

export default ProjectOne;
