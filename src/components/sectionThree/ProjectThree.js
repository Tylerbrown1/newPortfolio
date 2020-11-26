/** @format */

import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const MainDiv = styled.div`
  display: flex;
  height: 60vh;
  padding: 2rem 0 2rem 0;

  @media (max-width: 960px) {
    flex-direction: column;
  }
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
  background-image: url("/techstart.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>Software Company Website</h2>
        <h5 style={{ color: "#fff" }}>
          Technologies used: HTML, CSS(Styled Components), React
        </h5>
        <p style={{ color: "#fff" }}>
          I made this website after a lot of popular tech websites. This design
          is easy for the user to know where to click and navigate through the
          website.
        </p>
        <div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f2cc8f",
              color: "#fff",
              margin: "0 1rem 0 0",
            }}
          >
            Live
          </Button>
          <Button variant="outlined">Github</Button>
        </div>
      </ContentDiv>
      <ImgDiv></ImgDiv>
    </MainDiv>
  );
};

export default ProjectOne;
