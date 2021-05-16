import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PlayerContext } from "./App";
import withScale from "./withScale";
import resultScreen from "./../assets/result-screen-win.png";
import Button from "./UI/Button";
import squareBtn from "./../assets/squareBtn.png";
import squareBtnHover from "./../assets/squareBtnHover.png";

const Modal = ({ scale, level, score }) => {
  const { player, setUserData } = useContext(PlayerContext);
  const { push } = useHistory();
  const updatedProgressArray = player.progress.map((item) => {
    if (item.level === Number(level)) {
      return { ...item, passed: true, score: score };
    } else if (item.level === Number(level) + 1) {
      return { ...item, available: true };
    } else {
      return item;
    }
  });

  const clickHandler = () => {
    setUserData({ ...player, progress: updatedProgressArray });
    push("/");
  };

  return (
    <Page>
      <Wrapper scale={scale}>
        <Content>
          <Title>Gratulacje!</Title>
          <Text>Poziom {level} został ukończony</Text>
          <Text>Twój wynik to: {score}</Text>
          <Button
            onClick={clickHandler}
            variant={"square"}
            image={squareBtn}
            hoverImage={squareBtnHover}
          >
            OK
          </Button>
        </Content>
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
`;

const Content = styled.div`
  position: absolute;
  display: flex;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
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

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #af753b;
  text-shadow: 0px 0px 1px black;
`;
