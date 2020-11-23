/** @format */

import React from "react";
import styled from "styled-components";
import { HiOutlineMail, HiPhone } from "react-icons/hi";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Boxs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 70vh;
  background-color: #6a947f;
  text-align: center;
`;
const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
`;
const IconDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 2rem;
`;

function Contact() {
  return (
    <div>
      <Boxs>
        <h1 style={{ color: "#fff" }}>
          Hi There <span>👋</span>
        </h1>
        <TextDiv>
          <p style={{ color: "#fff" }}>
            I always love meeting new people so please feel free to contact me
          </p>
          <IconDiv>
            <a
              style={{ color: "#f2cc8f", fontSize: "2rem" }}
              href="mailto: tylerbwn14@gmail.com"
            >
              <HiOutlineMail />
            </a>
            <a
              style={{ color: "#f2cc8f", fontSize: "2rem" }}
              href="tel:7194000180"
            >
              <HiPhone />
            </a>
            <a
              style={{ color: "#f2cc8f", fontSize: "2rem" }}
              href="https://www.linkedin.com/in/tyler-brown-32860b197/"
            >
              <AiFillLinkedin />
            </a>
            <a
              style={{ color: "#f2cc8f", fontSize: "2rem" }}
              href="https://github.com/Tylerbrown1"
            >
              <AiFillGithub />
            </a>
          </IconDiv>
        </TextDiv>
      </Boxs>
    </div>
  );
}

export default Contact;
