import { Component } from 'react';
import Section from '../Section/Section';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export default class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = feedback => {
    this.setState(prevState => {
      const value = prevState[feedback];
      return {
        [feedback]: value + 1,
      };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const positive = this.state.good;
    if (!total) {
      return 0;
    }
    const result = (positive / total) * 100;
    return Number(result.toFixed(2));
  }

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={css.feedback}>
        <Section title="Please leave feedback">
          <FeedbackOptions leaveFeedback={this.leaveFeedback} />
        </Section>

        <Section title="Statistics">
          {!total ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}
Feedback.propTypes = {
  good : PropTypes.number,
  neutral :PropTypes.number,
  bad: PropTypes.number,
  leaveFeedback: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,

}