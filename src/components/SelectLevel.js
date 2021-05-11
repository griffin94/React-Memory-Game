import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import withScale from "./withScale";
import LevelSelectScreen from "./../assets/levelselectscreen.png";
import LevelIcon from "./../assets/levelicon.png";
import LevelIconHover from "./../assets/leveliconhover.png";

const SelectLevel = ({ player, scale }) => {
  const history = useHistory();

  const goToGame = (e) => {
    history.push(`/React-Memory-Game/game/${e.target.id}`);
  };
  return (
    <Page>
      <Wrapper scale={scale}>
        <Levels amount={Math.ceil(player.progress.length / 2)}>
          {player.progress.map((level) => (
            <Button
              key={level.level}
              id={`lev${level.level}`}
              onClick={goToGame}
            >
              {level.level}
            </Button>
          ))}
        </Levels>
      </Wrapper>
    </Page>
  );
};

export default withScale(SelectLevel);

const Page = styled.div`
  background: radial-gradient(rgba(43, 55, 96, 1), rgba(11, 16, 35, 1));
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1273px;
  height: 716px;
  transform: ${({ scale }) => `translate(-50%, -50%) scale(${scale})`};
  background-image: ${`url(${LevelSelectScreen})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Levels = styled.div`
  width: ${(props) => props.amount * 176}px;
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  font-size: 60px;
  font-weight: bold;
  color: #af753b;
  text-shadow: 0px 0px 2px black;
  width: 176px;
  height: 176px;
  background-color: transparent;
  background-image: ${`url(${LevelIcon})`};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  transition: background-image 0.2s linear;
  :hover,
  :focus {
    outline: none;
    background-image: ${`url(${LevelIconHover})`};
  }
`;

// const Levels = styled.div`
//   position: absolute;
//   top: 55%;
//   left: 50%;
//   width: 42%;
//   height: 40%;
//   transform: translate(-50%, -50%);
//   display: flex;
//   flex-wrap: wrap;
//   max-width: 800px;
// `;

// const Button = styled.button`
//   background-color: transparent;
//   background-image: ${`url(${LevelIcon})`};
//   background-size: contain;
//   background-position: center;
//   background-repeat: no-repeat;
//   border: none;
//   color: #fff;
//   flex-basis: 33%;
//   padding-top: 33%;
//   margin: 10px 0px;
//   position: relative;
//   transition: background-image 0.2s linear;
//   :hover,
//   :focus {
//     background-image: ${`url(${LevelIconHover})`};
//     outline: none;
//   }
//   &:before {
//     content: ${(props) => `"${props.value}"`};
//     font-size: 30px;
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
// `;
