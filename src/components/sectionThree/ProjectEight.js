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
  padding-left: 1rem;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

const ImgDiv = styled.div`
  flex: 1;
  background-image: url("/weather.PNG");
  background-position: center;

  background-size: contain;
  background-repeat: no-repeat;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ImgDiv></ImgDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>Weather API and to-do list</h2>
        <h5 style={{ color: "#fff" }}>
          Technologies used: HTML, CSS(Styled Components), React
        </h5>
        <p style={{ color: "#fff" }}>
          I was took a weather api and made an application that changes the
          weather and location depending on where the user searches. I also have
          a to-do list with CRUD functionality.
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
