import "./App.css";
import logo from "./img/rl-logo.png";
import Button from "./componentes/buttom.js";
import Counter from "./componentes/counter.js";
import { useState } from "react";

function App() {
  const [numClicks, setNumClicks] = useState(0);

  const madeClick = () => {
    setNumClicks(numClicks + 1);
  };

  const restartClick = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="main-container">
        <Counter numClicks={numClicks} />
        <Button text="Click" isButtonClick={true} click={madeClick} />
        <Button text="Restart" isButtonClick={false} click={restartClick} />
      </div>
    </div>
  );
}

export default App;
