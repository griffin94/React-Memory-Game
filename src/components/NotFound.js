import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import withScale from "./withScale";
import HomeScreen from "./../assets/title.png";

const NotFound = ({ scale }) => {
  const [timer, setTimer] = useState(10);

  const intervalRef = useRef(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      console.log("interval");
      setTimer((currentState) => currentState - 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <Page>
      <Wrapper scale={scale}>
        <Title>
          <span>404</span>
          <br />
          page not found
        </Title>
        <Text>Przekierowanie nastąpi automatycznie za {timer} sekund.</Text>
      </Wrapper>
      {timer === 0 && <Redirect to='/' />}
    </Page>
  );
};

export default withScale(NotFound);

const Page = styled.div`
  background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));
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
  width: 1273px;
  height: 716px;
  transform: ${({ scale }) => `translate(-50%, -50%) scale(${scale})`};
  background-image: ${`url(${HomeScreen})`};
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
  font-size: 80px;
  letter-spacing: 1px;
  color: #af753b;
  text-shadow: 0px 0px 2px black;
  text-align: center;
  span {
    color: #9e1515;
  }
`;

const Text = styled.p`
  font-size: 28px;
  font-weight: 500;
  color: #af753b;
  text-shadow: 0px 0px 1px black;
`;
