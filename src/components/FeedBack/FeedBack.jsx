import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleMakeFeedback = event => {
    const { name } = event.target;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };

  countTotalFeedback() {
    const values = Object.values(this.state);
    return values.reduce((total, value) => total + value);
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    if (total === 0) {
      return 0;
    }
    return Math.round((this.state.good * 100) / total);
  };
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions onLeaveFeedback={this.handleMakeFeedback} />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          positivePercentage={this.countPositiveFeedbackPercentage}
        >
          <Notification message="There is no feedback" />
        </Statistics>
      </Section>
    );
  }
}
export default Feedback;
