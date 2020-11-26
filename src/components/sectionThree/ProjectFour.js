/** @format */

import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

const MainDiv = styled.div`
  display: flex;
  height: 60vh;
  padding: 2rem 0 2rem 0;

  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
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
  background-image: url("/outdoor (1).jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
  }
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ImgDiv></ImgDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>Outdoor Clothing</h2>
        <h5 style={{ color: "#fff" }}>
          Technologies used: HTML, CSS(Styled Components), React
        </h5>
        <p style={{ color: "#fff" }}>
          I took a design I found off of dribbble and wanted to see if I could
          replicate it. This design really challenged my CSS skills and the end
          result turned out really good.
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
    </MainDiv>
  );
};

export default ProjectOne;
