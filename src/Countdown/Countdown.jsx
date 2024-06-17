import "../App.css";

export default function Countdown(countdownNumber) {
  if (countdownNumber === 0) {
    return "👩🏽‍🚀";
  } else if (countdownNumber === 1) {
    return "🚀";
  }
  return countdownNumber;
}
