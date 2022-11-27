import React, { useState } from "react";
import "./App.css";
import Icon from "./Components/Icon";
// toastify code
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// reactstrap code
import "bootStrap/dist/css/bootStrap.css";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

const itemArray = new Array(9).fill("empty");
function App() {
  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const relodGame = () => {
    //
  };

  const checkIsWinner = () => {
    //
  };

  const changeItem = (itemNumber) => {
    //
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
