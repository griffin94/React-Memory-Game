import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import SelectLevel from "./SelectLevel";

const initialPlayerData = {
  nickname: "",
  progress: [
    {
      level: 1,
      passed: false,
      score: null,
    },
    {
      level: 2,
      passed: false,
      score: null,
    },
    {
      level: 3,
      passed: false,
      score: null,
    },
    {
      level: 4,
      passed: false,
      score: null,
    },
    {
      level: 5,
      passed: false,
      score: null,
    },
    {
      level: 6,
      passed: false,
      score: null,
    },
  ],
};

const App = () => {
  const [player, setPlayer] = useState(() => {
    const data = JSON.parse(localStorage.getItem("rmg-user-data"));
    return data ? data : initialPlayerData;
  });

  const setUserData = (nickname) => {
    const newState = { ...player, nickname };
    localStorage.setItem("rmg-user-data", JSON.stringify(newState));
    setPlayer(newState);
  };

  return (
    <div className='App'>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/React-Memory-Game'>
            <Home
              player={player}
              setUserData={setUserData}
              width={1273}
              height={716}
            />
          </Route>
          <Route exact path='/React-Memory-Game/levels'>
            <SelectLevel player={player} width={1273} height={716} />
          </Route>
          <Route exact path='/React-Memory-Game/game/:level'>
            <Game />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
