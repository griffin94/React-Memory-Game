import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import withScale from "./withScale";
import StartGameBtn from "./../assets/button-start.png";
import StartGameBtnHover from "./../assets/button-start-hover.png";
import AddBtn from "./../assets/button-plus.png";
import AddBtnHover from "./../assets/button-plus-hover.png";
import HomeScreen from "./../assets/title.png";

const Home = ({ player, setUserData, scale }) => {
  const [textField, setTextField] = useState({ value: "", error: false });
  const history = useHistory();

  const goToSelectLevel = () => {
    history.push("/React-Memory-Game/levels");
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
      setUserData(textField.value);
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
            <NickName>Cześć {player.nickname}!</NickName>
            <Button variant='StartGameBtn' onClick={goToSelectLevel} />
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
            <Button variant='AddBtn' onClick={addUserNickname} />
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

const Title = styled.h1`
  font-size: 80px;
  letter-spacing: 1px;
  color: #af753b;
  text-shadow: 0px 0px 2px black;
  span {
    color: #94bd00;
  }
`;

const NickName = styled.h2`
  font-size: 50px;
  color: #af753b;
  text-shadow: 0px 0px 2px black;
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

const Button = styled.button`
  width: ${({ variant }) => {
    switch (true) {
      case variant === "AddBtn":
        return "88px";
      case variant === "StartGameBtn":
        return "363px";
    }
  }};
  height: ${({ variant }) => {
    switch (true) {
      case variant === "AddBtn":
        return "88px";
      case variant === "StartGameBtn":
        return "178px";
    }
  }};
  background-color: transparent;
  background-image: ${({ variant }) => {
    switch (true) {
      case variant === "AddBtn":
        return `url(${AddBtn})`;
      case variant === "StartGameBtn":
        return `url(${StartGameBtn})`;
    }
  }};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transition: background-image 0.2s linear;
  :hover,
  :focus {
    outline: none;
    background-image: ${({ variant }) => {
      switch (true) {
        case variant === "AddBtn":
          return `url(${AddBtnHover})`;
        case variant === "StartGameBtn":
          return `url(${StartGameBtnHover})`;
      }
    }};
  }
`;
