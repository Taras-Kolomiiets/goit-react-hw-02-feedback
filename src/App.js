import React, { useState } from 'react';
import FeedbackOptions from './components/feedbackOptions';
import Section from './components/section';
import Container from './components/container';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;

  const handlerClick = value => {
    switch (value) {
      case 'good':
        setGood(() => good + 1);
        break;
      case 'neutral':
        setNeutral(() => neutral + 1);
        break;
      case 'bad':
        setBad(() => bad + 1);
        break;
      default:
        break;
    }
  };

  const countPositiveFeedbackPercentage = () => {
    if (total === 0) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  const positiveFeedbackCount = countPositiveFeedbackPercentage();

  return (
    <Container>
      <FeedbackOptions handlerClick={handlerClick} />
      <Section
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positiveFeedbackCount={positiveFeedbackCount}
      />
    </Container>
  );
};

export default App;
