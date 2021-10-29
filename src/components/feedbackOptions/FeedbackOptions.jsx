import React from 'react';
import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

function FeedbackOptions({ handlerClick }) {
  return (
    <div>
      <h1 className={s.header}>Please leave feedback</h1>
      <hr className={s.hrShelf} />
      <button
        className={s.good}
        type="button"
        onClick={() => {
          handlerClick('good');
        }}
      >
        Good
      </button>
      <button
        className={s.neutral}
        type="button"
        onClick={() => {
          handlerClick('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={s.bad}
        type="button"
        onClick={() => {
          handlerClick('bad');
        }}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  handlerClick: PropTypes.func.isRequired,
};

export default FeedbackOptions;
