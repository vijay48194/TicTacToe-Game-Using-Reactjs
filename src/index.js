import React from "react";
import ReactDOM from "react-dom";
import Tictactoe from "./Tictactoe.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Tictactoe></Tictactoe>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
