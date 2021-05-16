import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import withScale from "./withScale";
import HomeScreen from "./../assets/title.png";
import { PlayerContext } from "./App";
import Button from "./UI/Button";
import rectangleBtn from "./../assets/rectangleBtn.png";
import rectangleBtnHover from "./../assets/rectangleBtnHover.png";

const Scores = ({ scale }) => {
  const { goBack } = useHistory();
  const { player } = useContext(PlayerContext);
  return (
    <Page>
      <Wrapper scale={scale}>
        <Title>Wyniki</Title>
        <Table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Wynik</th>
            </tr>
          </thead>
          <tbody>
            {player.progress.map((item) => (
              <tr key={item.level}>
                <td>{item.level}</td>
                <td>{item.score ? item.score : "Level niezaliczony"}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Button
          variant='rectangle'
          image={rectangleBtn}
          hoverImage={rectangleBtnHover}
          onClick={goBack}
        >
          Wróć
        </Button>
      </Wrapper>
    </Page>
  );
};

export default withScale(Scores);

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

const Table = styled.table`
  text-align: center;
  border-collapse: collapse;
  th,
  td {
    border: 1px solid black;
    padding: 5px 10px;
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
