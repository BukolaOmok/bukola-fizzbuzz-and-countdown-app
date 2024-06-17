import FizzBuzz from "./FizzBuzz/FizzBuzz.jsx";
import "./App.css";
import Countdown from "./Countdown/Countdown.jsx";

export default function App() {
  return (
    <div>
      <h3>FizzBuzz Section</h3>
      <FizzBuzz />
      <h3>Countdown Section</h3>
      <Countdown />
      <Countdown />
      <Countdown />
    </div>
  );
}
