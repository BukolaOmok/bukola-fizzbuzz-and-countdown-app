import FizzBuzz from "./FizzBuzz/FizzBuzz.jsx";
// import Countdown from './Countdown/Countdown.jsx'
import React from "react"
import "./App.css";

export default function App() {
  const [presentCount, setPresentCount] = React.useState(1);

  function next() {
    setPresentCount(presentCount + 1);
  }

  function reset() {
    setPresentCount(0);
  }

  return (
    <div className="update">
      <button className="update--next" onClick={next}>
        Next
      </button>
      <div className="update--content">
        <h1>{FizzBuzz(presentCount)}</h1>
      </div>
      <button className="update--reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
