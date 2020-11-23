/** @format */

import React from "react";
import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  height: 50vh;
  padding: 2rem 0 2rem 0;
`;

const ContentDiv = styled.div`
  flex: 1;
  padding-right: 1rem;
`;

const ImgDiv = styled.div`
  flex: 1;
  background-image: url("/framer (1).jpg");
  background-position: center;
  background-size: cover;
  width: 100%;
  border-radius: 1rem;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ContentDiv>
        <h3>FullStack Dashboard (Coding Challenge)</h3>
        <h5>
          Technologies used: Python, Django, Postgres, HTML, CSS(Styled
          Components), React, Redux
        </h5>
        <p>
          I was given two weeks to build a full stack dashboard using a specific
          style guide. I built a production level authentication and
          authorization that requires email verification. The Dash board fetches
          data from the database and displays it in tables that is easy to
          navigate and sort.
        </p>
        <div>
          <button>Live</button>
          <button>Github</button>
        </div>
      </ContentDiv>
      <ImgDiv></ImgDiv>
    </MainDiv>
  );
};

export default ProjectOne;
