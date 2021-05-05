import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import levelsData from "./../data/levelsData";

function Game() {
  const { level } = useParams();
  const [cards, setCards] = useState([]);
  const [clicks, setClicks] = useState(0);
  const { rows, cols } = levelsData[level];
  const cardsAmount = rows * cols;

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
    const newCardsState = cards.map((card) => {
      if (card.id == e.target.id) {
        return { ...card, visible: true, clickHandler: false };
      } else {
        return card;
      }
    });

    if (currentClicks === 1 || currentClicks === 2) {
      setClicks(currentClicks);
      setCards(newCardsState);
      currentClicks === 2 && checkAreCardsEqual(newCardsState);
    }
  };

  const checkAreCardsEqual = (newCardsState) => {
    const visibleCards = newCardsState.filter((card) => card.visible);
    const result =
      visibleCards[0].background === visibleCards[1].background ? true : false;

    setTimeout(() => {
      setCards(
        newCardsState.map((card) => {
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
        })
      );
      setClicks(0);
    }, 1000);
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
