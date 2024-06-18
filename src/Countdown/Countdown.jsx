import "../App.css";
import React from "react";

export default function Countdown() {
  const generateRandomCountdownNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  let countdownNumber = generateRandomCountdownNumber(5, 15);
  const [presentNumber, setPresentNumber] = React.useState(countdownNumber);

  function decrement() { 
    if (presentNumber <= 0) {
    return 0;
  } else {
    return setPresentNumber(presentNumber - 1);
  }
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
        <h1>{countdownBreakdown(presentNumber)}</h1>
      </div>
      <button className="count--down--update--reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

const countdownBreakdown = (countdownNumber) => {
  if (countdownNumber === 1) {
    return "👩🏽‍🚀";
  } else if (countdownNumber === 0){
    return "🚀";
  } 
    return countdownNumber
};
