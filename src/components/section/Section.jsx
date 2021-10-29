import React from 'react';
import Statistics from './statistics';
import Notification from './notification';
import PropTypes from 'prop-types';

function Section({
  good,
  neutral,
  bad,
  total,
  countPositiveFeedbackPercentage,
}) {
  return (
    <div>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

Section.propTypes = {
  state: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default Section;
