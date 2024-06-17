import React from "react";
import "./App.css";

export default function App() {
  const count = () => {
  const countArray = [];
    for (let i = 1; i <= 15; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        countArray.push("FizzBuzz");
      } else if (i % 5 === 0) {
        countArray.push("Buzz");
      } else if (i % 3 === 0) {
        countArray.push("Fizz");
      } else {
        countArray.push(i);
      }
    }
    return countArray;
  };
  const fizzBuzzArray = count();
  const [presentIndex, setPresentIndex] = React.useState(0);

  function next() {
    if (presentIndex < fizzBuzzArray.length -1) {
      setPresentIndex(presentIndex + 1);
    }
  }

  function reset() {
    setPresentIndex(0);
  }

  return (
    <div className="update">
      <button className="update--next" onClick={next}>
        Next
      </button>
      <div className="update--content">
        <h1>{fizzBuzzArray[presentIndex]}</h1>
      </div>
      <button className="update--reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
