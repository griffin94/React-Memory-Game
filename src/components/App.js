import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import SelectLevel from "./SelectLevel";
import Scores from "./Scores";

export const PlayerContext = React.createContext();

const initialPlayerData = {
  nickname: "",
  progress: [
    {
      level: 1,
      passed: false,
      score: null,
      available: true,
    },
    {
      level: 2,
      passed: false,
      score: null,
      available: false,
    },
    {
      level: 3,
      passed: false,
      score: null,
      available: false,
    },
    {
      level: 4,
      passed: false,
      score: null,
      available: false,
    },
    {
      level: 5,
      passed: false,
      score: null,
      available: false,
    },
    {
      level: 6,
      passed: false,
      score: null,
      available: false,
    },
  ],
};

const App = () => {
  const [player, setPlayer] = useState(() => {
    const data = JSON.parse(localStorage.getItem("rmg-user-data"));
    return data ? data : initialPlayerData;
  });

  const setUserData = (newState) => {
    localStorage.setItem("rmg-user-data", JSON.stringify(newState));
    setPlayer(newState);
  };

  const resetData = () => {
    localStorage.setItem("rmg-user-data", JSON.stringify(initialPlayerData));
    setPlayer(initialPlayerData);
  };

  return (
    <PlayerContext.Provider value={{ player, setUserData, resetData }}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/'>
            <Home width={1273} height={716} />
          </Route>
          <Route exact path='/levels'>
            <SelectLevel player={player} width={1273} height={716} />
          </Route>
          <Route exact path='/game/:level'>
            <Game />
          </Route>
          <Route exact path='/scores'>
            <Scores width={1273} height={716} />
          </Route>
        </Switch>
      </Router>
    </PlayerContext.Provider>
  );
};

export default App;
