import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({ good, bad, neutral, total, positiveFeedbackCount }) {
  return (
    <div>
      <h2 className={s.header}>Statistics</h2>
      <p className={s.item}>Good: {good}</p>
      <p className={s.item}>Neutral: {neutral}</p>
      <p className={s.item}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.feedback}>Positive feedback: {positiveFeedbackCount} %</p>
    </div>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackCount: PropTypes.number.isRequired,
};

export default Statistics;
