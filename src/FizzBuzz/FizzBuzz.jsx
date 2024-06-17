import "../App.css";
import React from "react"

const FizzBuzzBreakDown = (i) => {
  if (i % 3 === 0 && i % 5 === 0) {
    return"FizzBuzz";
  } else if (i % 5 === 0) {
    return"Buzz";
  } else if (i % 3 === 0) {
    return"Fizz";
  } else {
    return i;
  }
}

  export default function FizzBuzz () {
      const [presentCount, setPresentCount] = React.useState(1);

  function next() {
    setPresentCount(presentCount + 1);
  }

  function reset() {
    setPresentCount(1);
  }

  return (
    <div className="update">
      <button className="update--next" onClick={next}>
        Next
      </button>
      <div className="update--content">
        <h1>{FizzBuzzBreakDown(presentCount)}</h1>
      </div>
      <button className="update--reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
  }
