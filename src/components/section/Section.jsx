import React from 'react';
import Statistics from './statistics';
import Notification from './notification';
import PropTypes from 'prop-types';

function Section({ good, neutral, bad, total, positiveFeedbackCount }) {
  return (
    <div>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positiveFeedbackCount={positiveFeedbackCount}
        />
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

Section.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbackCount: PropTypes.number.isRequired,
};

export default Section;
