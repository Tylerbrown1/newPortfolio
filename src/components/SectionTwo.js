/** @format */

import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { Tabs, Tab, AppBar } from "@material-ui/core";
import Contact from "./Contact";
import Fade from "react-reveal/Fade";
import Skills from "./Skills";

const Section = styled.section`
  background-color: #3d405b;
  height: 80vh;
`;
const Container = styled.div`
  padding: 0 7.4%;
`;
const Boxs = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 70vh;
  background-color: #6a947f;
`;
const Column = styled.div`
  flex: 50%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: center;
`;
const Column2 = styled.div`
  flex: 50%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  align-items: left;
`;
const Heading4 = styled.h4`
  color: #f2cc8f;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  height: 24px;
  margin: 0;
`;
const Heading1 = styled.h1`
  color: white;
  font-size: 40px;

  font-family: "Alfa Slab One";
  margin: 0;
  @media (max-width: 820px) {
    font-size: 20px;
  }
`;
const Img = styled.img`
  width: 60%;
`;

const useStyles = makeStyles({
  root: {
    "&:hover": {
      backgroundColor: "#3d405b",
    },
  },
});

function SectionTwo() {
  const classes = useStyles();
  const [selectedTab, setselectedTab] = React.useState(0);
  const handleChange = (event, newValue) => {
    setselectedTab(newValue);
  };
  return (
    <Section>
      <Container>
        <div>
          <AppBar position="static">
            <Tabs
              value={selectedTab}
              onChange={handleChange}
              style={{ backgroundColor: "#81b29a" }}
              centered
              TabIndicatorProps={{
                style: {
                  backgroundColor: "#f2cc8f",
                },
              }}
            >
              <Tab label="About" className={classes.root} />
              <Tab label="Let's Chat" className={classes.root} />
              <Tab label="Skills" className={classes.root} />
            </Tabs>
          </AppBar>
          {selectedTab === 0 && (
            <Boxs>
              <Column>
                <Img src="human.png" alt="" />
              </Column>
              <Column2>
                <Heading4>About Me</Heading4>
                <Heading1>Why you should hire me?</Heading1>
                <p style={{ color: "white" }}>
                  - Vast track record of success. <br />- A knack for teamwork
                  and working with people. <br /> - A great understanding of the
                  client experience. <br /> - Willingness to learn & problem
                  solve.
                </p>
              </Column2>
            </Boxs>
          )}
          {selectedTab === 1 && <Contact />}
          {selectedTab === 2 && <Skills />}
        </div>
      </Container>
    </Section>
  );
}

export default SectionTwo;
