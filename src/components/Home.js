import React, { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PlayerContext } from "./App";
import withScale from "./withScale";
import rectangleBtn from "./../assets/rectangleBtn.png";
import rectangleBtnHover from "./../assets/rectangleBtnHover.png";
import HomeScreen from "./../assets/title.png";
import Button from "./UI/Button";

const Home = ({ scale }) => {
  const [textField, setTextField] = useState({ value: "", error: false });
  const { player, setUserData, resetData } = useContext(PlayerContext);
  const history = useHistory();
  const progress = player.progress.filter((item) => item.passed).length;

  const goToSelectLevel = () => {
    history.push("/React-Memory-Game/levels");
  };

  const goToScores = () => {
    history.push("/React-Memory-Game/scores");
  };

  const formatter = () => {
    const formattedValue =
      textField.value.trim().charAt(0).toUpperCase() +
      textField.value.trim().slice(1);

    formattedValue
      ? setTextField({ value: formattedValue, error: false })
      : setTextField({ value: formattedValue, error: true });
  };

  const addUserNickname = () => {
    if (textField.value) {
      setTextField({ ...textField, error: false });
      setUserData({ ...player, nickname: textField.value });
    } else {
      setTextField({ ...textField, error: true });
    }
  };

  return (
    <Page>
      <Wrapper scale={scale}>
        <Title>
          <span>M</span>emory&nbsp;<span>G</span>ame
        </Title>
        {player.nickname ? (
          <>
            <Text>Gracz: {player.nickname}</Text>
            <Text>Postęp: {progress}/6</Text>
            <Navigation>
              <Button
                variant='rectangle'
                image={rectangleBtn}
                hoverImage={rectangleBtnHover}
                onClick={goToSelectLevel}
              >
                START
              </Button>
              <Button
                variant='rectangle'
                image={rectangleBtn}
                hoverImage={rectangleBtnHover}
                onClick={resetData}
              >
                RESET
              </Button>
              <Button
                variant='rectangle'
                image={rectangleBtn}
                hoverImage={rectangleBtnHover}
                onClick={goToScores}
              >
                WYNIKI
              </Button>
            </Navigation>
          </>
        ) : (
          <>
            <Input
              type='text'
              placeholder='Wpisz swój nick...'
              value={textField.value}
              error={textField.error}
              onChange={(e) =>
                setTextField({ ...textField, value: e.target.value })
              }
              onBlur={formatter}
            />
            <Button
              variant='rectangle'
              image={rectangleBtn}
              hoverImage={rectangleBtnHover}
              onClick={addUserNickname}
            >
              OK
            </Button>
          </>
        )}
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

const Navigation = styled.div`
  display: flex;
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

const Input = styled.input`
  width: 363px;
  height: 60px;
  border: ${(props) =>
    props.error ? "6px solid #AE3328" : "6px solid #af753b"};
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

const Text = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #af753b;
  text-shadow: 0px 0px 1px black;
`;
