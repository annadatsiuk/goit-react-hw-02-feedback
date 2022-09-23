import React from 'react';
import PropTypes from 'prop-types';
import css from "./FeedbackOptions.module.css"

export default function FeedbackOptions({ leaveFeedback }) {
  return (
    <div className={css.feedbackBtnsWrap}>
      <button type="button" className={css.feedback__btn} onClick={() => leaveFeedback('good')}>
        Good
      </button>
      <button type="button" className={css.feedback__btn} onClick={() => leaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" className={css.feedback__btn} onClick={() => leaveFeedback('bad')}>
        Bad
      </button>
    </div>
  );
}
FeedbackOptions.propTypes = {
  onClick: PropTypes.func
}
