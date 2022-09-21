import { Component } from "react";

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
    leaveFeedback = (feedback) => {
        this.setState((prevState) => {
            const value = prevState[feedback];
            return {
              [feedback]: value + 1  
            }
        })
    }
    
    render() {
        const { good, neutral, bad } = this.state;
    return (
      <div>
        <div>
          <p>Please leave feedback</p>
          <button type="button" onClick={() => this.leaveFeedback("good")}>Good</button>
          <button type="button" onClick={() => this.leaveFeedback("neutral")}>Neutral</button>
          <button type="button" onClick={() => this.leaveFeedback("bad")}>Bad</button>
        </div>
        <div>
          <p>Statistics</p>
          <ul>
            <li>Good: {good} </li>
            <li>Neuttral: {neutral} </li>
            <li>Bad: {bad} </li>
          </ul>
        </div>
      </div>
    );
  }
}
