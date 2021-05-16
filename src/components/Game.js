import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import levelsData from "./../data/levelsData";
import Modal from "./Modal";

function Game() {
  const [cards, setCards] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [gameEnd, setGameEnd] = useState(false);
  const { level } = useParams();
  const { rows, cols } = levelsData[`lev${level}`];
  const cardsAmount = rows * cols;
  const playTime = useRef(null);

  useEffect(() => {
    init();
    setTimeout(() => {
      setCards((prevState) =>
        prevState.map((card) => ({
          ...card,
          visible: false,
          clickHandler: true,
        }))
      );
      playTime.current = { startTime: new Date().getTime() };
    }, 1000);
  }, []);

  const init = () => {
    const newCards = generateCards();
    appendColorsToCards(newCards);
    setCards(newCards);
  };

  const generateCards = () => {
    const result = [];
    for (let i = 0; i < cardsAmount; i++) {
      result.push({
        id: i,
        visible: true,
        clickHandler: false,
        active: true,
        background: "",
      });
    }
    return result;
  };

  const appendColorsToCards = (cards) => {
    let ids = cards;
    for (let i = 0; i < cardsAmount / 2; i++) {
      const randomCard1 = Math.floor(Math.random() * ids.length);
      const randomCardId1 = ids[randomCard1].id;
      ids = ids.filter((item, index) => index !== randomCard1);
      const randomCard2 = Math.floor(Math.random() * ids.length);
      const randomCardId2 = ids[randomCard2].id;
      ids = ids.filter((item, index) => index !== randomCard2);
      const color = generateColor();
      cards[randomCardId1].background = color;
      cards[randomCardId2].background = color;
    }
  };

  const generateColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const clickHandler = (e) => {
    const currentClicks = clicks + 1;
    const stateWithVisibleCards = cards.map((card) => {
      if (card.id == e.target.id) {
        return { ...card, visible: true, clickHandler: false };
      } else {
        return card;
      }
    });

    if (currentClicks === 1 || currentClicks === 2) {
      setClicks(currentClicks);
      setCards(stateWithVisibleCards);
      currentClicks === 2 && checkAreCardsEqual(stateWithVisibleCards);
    }
  };

  const checkAreCardsEqual = (stateWithVisibleCards) => {
    const onlyVisibleCards = stateWithVisibleCards.filter(
      (card) => card.visible
    );
    const result =
      onlyVisibleCards[0].background === onlyVisibleCards[1].background
        ? true
        : false;

    setTimeout(() => {
      const stateAfterCompare = stateWithVisibleCards.map((card) => {
        if (card.visible && result) {
          return {
            ...card,
            clickHandler: false,
            visible: false,
            active: false,
          };
        } else if (card.visible && !result) {
          return { ...card, clickHandler: true, visible: false };
        } else {
          return card;
        }
      });

      setCards(stateAfterCompare);
      setClicks(0);
      const activeCards = stateAfterCompare.filter((card) => card.active);
      !activeCards.length && handleGameEnd();
    }, 1000);
  };

  const handleGameEnd = () => {
    playTime.current.endTime = new Date().getTime();
    playTime.current.score =
      (playTime.current.endTime - playTime.current.startTime) / 1000;
    setTimeout(() => setGameEnd(true), 400);
  };

  return (
    <Wrapper>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          size={cols}
          bgColor={
            !card.active
              ? "rgba(0, 0, 0, 0.7)"
              : !card.visible
              ? "gray"
              : card.background
          }
          className={card.visible && "visible"}
          onClick={card.clickHandler ? clickHandler : undefined}
        />
      ))}
      {gameEnd && (
        <Modal
          width={612}
          height={884}
          level={level}
          score={playTime.current.score}
        />
      )}
    </Wrapper>
  );
}

export default Game;

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  cursor: pointer;
  flex-basis: ${(props) => 100 / props.size}%;
  flex-grow: 1;
  flex-shrink: 1;
  border: 4px solid white;
  border-radius: 10px;
  transform: rotate3d(0, 1, 0, 0deg);
  transition: transform 0.4s linear, background-color 0s linear 0.2s;
  background-color: ${(props) => props.bgColor};
  &.visible {
    transform: rotate3d(0, 1, 0, 180deg);
  }
`;
