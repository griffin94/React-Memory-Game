import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { PlayerContext } from "./App";
import withScale from "./withScale";
import LevelSelectScreen from "./../assets/levelselectscreen.png";
import squareBtn from "./../assets/squareBtn.png";
import squareBtnHover from "./../assets/squareBtnHover.png";
import Button from "./UI/Button";

const SelectLevel = ({ scale }) => {
  const history = useHistory();
  const { player } = useContext(PlayerContext);

  const goToGame = (e) => {
    history.push(`/React-Memory-Game/game/${e.target.id}`);
  };
  return (
    <Page>
      <Wrapper scale={scale}>
        <Levels amount={Math.ceil(player.progress.length / 2)}>
          {player.progress.map((level, index) => (
            <Button
              key={level.level}
              id={level.level}
              onClick={player.progress[index].available ? goToGame : undefined}
              variant={"square"}
              image={squareBtn}
              hoverImage={squareBtnHover}
              disabled={!player.progress[index].available}
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
