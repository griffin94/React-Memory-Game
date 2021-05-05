import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import StartGameBtn from "./../assets/button-start.png";
import StartGameBtnHover from "./../assets/button-start-hover.png";

const Home = () => {
  return (
    <Page>
      <Title>
        <span>M</span>emory <span>g</span>ame
      </Title>
      <Desc>Graj i ćwicz swoją pamięć!</Desc>
      <StyledLink to='/React-Memory-Game/levels'></StyledLink>
    </Page>
  );
};

export default Home;

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 42px;
  letter-spacing: 2px;
  color: #fff;
  span {
    color: red;
  }
`;

const Desc = styled.p`
  font-size: 24px;
  color: #fff;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 200px;
  height: 98px;
  background-image: ${`url(${StartGameBtn})`};
  background-position: center;
  background-size: cover;
  transition: background-image 0.2s linear;
  :hover {
    background-image: ${`url(${StartGameBtnHover})`};
  }
`;
