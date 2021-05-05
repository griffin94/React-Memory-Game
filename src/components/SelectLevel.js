import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import LevelSelectScreen from "./../assets/levelselectscreen.png";
import LevelIcon from "./../assets/levelicon.png";
import LevelIconHover from "./../assets/leveliconhover.png";

const SelectLevel = ({ player }) => {
  const history = useHistory();

  const goToGame = (e) => {
    history.push(`/React-Memory-Game/game/${e.target.id}`);
  };
  return (
    <Page>
      <Wrapper>
        <Background src={LevelSelectScreen} />
        <Levels>
          {player.progress.map((level) => (
            <Button
              key={level.level}
              id={`lev${level.level}`}
              value={level.level}
              onClick={goToGame}
            />
          ))}
        </Levels>
      </Wrapper>
    </Page>
  );
};

export default SelectLevel;

const Page = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.img`
  max-width: 100%;
`;

const Levels = styled.div`
  position: absolute;
  top: 55%;
  left: 50%;
  width: 42%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
`;

const Button = styled.button`
  background-color: transparent;
  background-image: ${`url(${LevelIcon})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border: none;
  color: #fff;
  flex-basis: 33%;
  padding-top: 33%;
  margin: 10px 0px;
  position: relative;
  :hover,
  :focus {
    background-image: ${`url(${LevelIconHover})`};
    outline: none;
  }
  &:before {
    content: ${(props) => `"${props.value}"`};
    font-size: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
