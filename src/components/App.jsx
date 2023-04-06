import { useState } from 'react';
import './App.css'
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const options = [
  { title: 'Good', name: 'good' },
  { title: 'Neutral', name: 'neutral' },
  { title: 'Bad', name: 'bad' },
];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = (e) => {
    const { name } = e.target;

    switch (name) {
      case "good":
        setGood((prev) => prev + 1);
        break;
      case "neutral":
        setNeutral((prev) => prev + 1);
        break;
      case "bad":
        setBad((prev) => prev + 1);
        break;
      default:
        return;
    }
  };
  
  const total = good + neutral + bad;
  
    const countPositiveFeedbackPercentage = total => {
    let procentNumber = Math.round(
      (good / total) * 100
    );
    return procentNumber > 0 ? procentNumber : 0;
  };


    return (
      <div className='App'>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={onButtonClick}
        />
        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(total)}
            />
          )}
        </Section>
      </div>
    );
};
