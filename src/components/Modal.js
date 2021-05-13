import React from "react";
import styled from "styled-components";
import withScale from "./withScale";
import resultScreen from "./../assets/result-screen-win.png";

const Modal = ({ scale, level, score }) => {
  return (
    <Page>
      <Wrapper scale={scale}>
        <Title>Gratulacje!</Title>
        <p>Poziom {level.slice(-1)} został ukończony</p>
        <p>Twój wynik to:</p>
        <p>{score}</p>
      </Wrapper>
    </Page>
  );
};

export default withScale(Modal);

const Page = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 612px;
  height: 884px;
  transform: ${({ scale }) => `translate(-50%, -50%) scale(${scale})`};
  background-image: ${`url(${resultScreen})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & * {
    margin: 10px 0;
  }
`;

const Title = styled.h1`
  font-size: 70px;
  letter-spacing: 1px;
  color: #af753b;
  text-shadow: 0px 0px 2px black;
  span {
    color: #94bd00;
  }
`;
