/** @format */

import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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
  background-image: url("/framer (1).jpg");
  background-position: center;

  background-size: contain;
  background-repeat: no-repeat;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>Framer Motion</h2>
        <h5 style={{ color: "#fff" }}>
          Technologies used: HTML, CSS, React, Framer Motion
        </h5>
        <p style={{ color: "#fff" }}>
          I built a fun application that explores framer motion.
        </p>
        <div>
          <Button
            variant="contained"
            style={{
              backgroundColor: "#f2cc8f",
              color: "#fff",
            }}
          >
            Github
          </Button>
        </div>
      </ContentDiv>
      <ImgDiv></ImgDiv>
    </MainDiv>
  );
};

export default ProjectOne;
