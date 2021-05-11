import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import withScale from "./withScale";
import StartGameBtn from "./../assets/button-start.png";
import StartGameBtnHover from "./../assets/button-start-hover.png";
import HomeScreen from "./../assets/title.png";

const Home = ({ player, scale }) => {
  const history = useHistory();
  const goToSelectLevel = () => {
    history.push("/React-Memory-Game/levels");
  };

  return (
    <Page>
      <Wrapper scale={scale}>
        <Title>
          <span>M</span>emory&nbsp;<span>G</span>ame
        </Title>
        <NickName>{player.nickname}</NickName>
        <Input type='text' placeholder='Wpisz swój nick' />
        <Button onClick={goToSelectLevel} />
      </Wrapper>
    </Page>
  );
};

export default withScale(Home);

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
  span {
    color: #94bd00;
  }
`;

const NickName = styled.h2``;

const Input = styled.input`
  width: 363px;
  height: 60px;
  border: 6px solid #af753b;
  border-radius: 12px;
  background: transparent;
  padding: 10px 5px;
  font-size: 24px;
  font-weight: 700;
  color: #c58662;
  :focus {
    outline: none;
    box-shadow: 0px 0px 10px #ffff04;
  }
  ::placeholder {
    color: #c58662;
  }
`;

const Button = styled.button`
  width: 363px;
  height: 178px;
  background-color: transparent;
  background-image: ${`url(${StartGameBtn})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transition: background-image 0.2s linear;
  :hover,
  :focus {
    outline: none;
    background-image: ${`url(${StartGameBtnHover})`};
  }
`;
