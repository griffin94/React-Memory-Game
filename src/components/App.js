import React from "react";
import GlobalStyle from "./GlobalStyles";
import Game from "./Game";

const levels = {
  1: {
    rows: 2,
    cols: 2,
  },
  2: {
    rows: 2,
    cols: 3,
  },
  3: {
    rows: 3,
    cols: 4,
  },
  4: {
    rows: 4,
    cols: 4,
  },
};

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Game level={levels["1"]} />
    </div>
  );
}

export default App;
