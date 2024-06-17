import "../App.css";
import React from "react";

export default function Countdown() {
  const generateRandomCountdownNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let countdownNumber = generateRandomCountdownNumber(5, 15);
  const [presentNumber, setPresentNumber] = React.useState(countdownNumber);

  function decrement() {
    setPresentNumber(presentNumber - 1);
  }

  function reset() {
    setPresentNumber(countdownNumber);
  }

  return (
    <div className="countdown-update">
      <button className="countdown--update--decrement" onClick={decrement}>
        Decrement
      </button>
      <div className="countdown--update--content">
        <h1>{CountdownBreakdown(presentNumber)}</h1>
      </div>
      <button className="count--down--update--reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

const CountdownBreakdown = (countdownNumber) => {
  if (countdownNumber === 1) {
    return "👩🏽‍🚀";
  } else if (countdownNumber <= 0) {
    countdownNumber = 0;
    return "🚀";
  }
  return countdownNumber;
};
