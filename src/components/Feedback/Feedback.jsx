import { Component } from "react";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  render() {
    return (
      <div>
        <div>
          <p>Please leave feedback</p>
          <button type="button">Good</button>
          <button type="button">Neutral</button>
          <button type="button">Bad</button>
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: </li>
            <li>Neuttral: </li>
            <li>Bad: </li>
          </ul>
        </div>
      </div>
    );
  }
}
