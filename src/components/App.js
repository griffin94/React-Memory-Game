import React, { useState } from "react";
import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import SelectLevel from "./SelectLevel";

const player = {
  nickname: "player1",
  progress: [
    {
      level: 1,
      passed: true,
      score: 5,
    },
    {
      level: 2,
      passed: true,
      score: 15,
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
  return (
    <div>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/React-Memory-Game'>
            <Home />
          </Route>
          <Route exact path='/React-Memory-Game/levels'>
            <SelectLevel player={player} />
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
