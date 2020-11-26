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
  background-image: url("/fullStack.jpg");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 960px) {
    margin-top: 1rem;
  }
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>
          FullStack Dashboard (Coding Challenge)
        </h2>
        <h5 style={{ color: "#fff" }}>
          Technologies used: Python, Django, Postgres, HTML, CSS(Styled
          Components), React, Redux
        </h5>
        <p style={{ color: "#fff" }}>
          I was given two weeks to build a full stack dashboard using a specific
          style guide. I built a production level authentication and
          authorization that requires email verification. The Dash board fetches
          data from the database and displays it in tables that is easy to
          navigate and sort.
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
