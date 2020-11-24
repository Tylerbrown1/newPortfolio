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
`;

const ImgDiv = styled.div`
  flex: 1;
  background-image: url("/lux.jpg");
  background-position: center;
  background-size: cover;

  border-radius: 1rem;
`;

const ProjectOne = () => {
  return (
    <MainDiv>
      <ImgDiv></ImgDiv>
      <ContentDiv>
        <h2 style={{ color: "#f2cc8f" }}>LuxCar - Request A Ride</h2>
        <h5 style={{ color: "#fff" }}>
          Technologies used: Firebase, HTML, CSS(Styled Components, Material
          UI), React, Redux
        </h5>
        <p style={{ color: "#fff" }}>
          I created an application that allows users to request a ride using
          google places api. The user once signed up is allowed to request a
          ride of their choice.The user has the option to select the time and
          place they want to be picked up and have the option to cancel the ride
          if needed.
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
    </MainDiv>
  );
};

export default ProjectOne;
