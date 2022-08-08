import React from 'react';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

const options = [
  { title: 'Good', name: 'good' },
  { title: 'Neutral', name: 'neutral' },
  { title: 'Bad', name: 'bad' },
];

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onButtonClick = e => {
    const { name } = e.target;
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state);
    return total.reduce((acc, value) => (acc += value), 0);
  };

  countPositiveFeedbackPercentage = countTotalFeedback => {
    let procentNumber = Math.round(
      (this.state.good / countTotalFeedback) * 100
    );
    return procentNumber > 0 ? procentNumber : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onButtonClick}
        />
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback(good, neutral, bad)}
              positivePercentage={this.countPositiveFeedbackPercentage(
                this.countTotalFeedback()
              )}
            />
          )}
        </Section>
      </>
    );
  }
}
