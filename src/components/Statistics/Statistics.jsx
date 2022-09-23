import React from 'react';
import PropTypes from 'prop-types';
import css from "./Statistics.module.css";

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div>
      <ul className={css.feedback__list}>
        <li className={css.feedback_list__item}>Good: <span className={css.statistic_item__data}>{good}</span></li>
        <li className={css.feedback_list__item}>Neutral: <span className={css.statistic_item__data}>{neutral}</span></li>
        <li className={css.feedback_list__item}>Bad: <span className={css.statistic_item__data}>{bad}</span></li>
        <li className={css.feedback_list__item}>Total: <span className={css.statistic_item__data}>{total}</span></li>
        <li className={css.feedback_list__item}>Positive feedback: <span className={css.statistic_item__data}>{positivePercentage}%</span></li>
      </ul>
    </div>
  );
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,

}