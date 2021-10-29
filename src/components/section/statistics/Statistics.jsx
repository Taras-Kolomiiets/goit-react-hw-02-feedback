import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function Statistics({
  good,
  bad,
  neutral,
  total,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      <h2 className={s.header}>Statistics</h2>
      <p className={s.item}>Good: {good}</p>
      <p className={s.item}>Neutral: {neutral}</p>
      <p className={s.item}>Bad: {bad}</p>
      <p className={s.total}>Total: {total}</p>
      <p className={s.feedback}>
        Positive feedback: {countPositiveFeedbackPercentage()} %
      </p>
    </div>
  );
}

Statistics.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Statistics;
