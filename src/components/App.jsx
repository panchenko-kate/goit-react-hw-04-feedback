import { Component } from 'react';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Statistics } from "./Statistics/Statistics";
import { Layout } from './Layout/Layout';
import { Notification } from "./Notification/Notification"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrement = (options) => {
    this.setState({
      [options.currentTarget.innerText]: this.state[options.currentTarget.innerText] + 1 
    });
  }

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    const positiveFeedback = this.state.good;
    return totalFeedback === 0 ? 0 : Math.round((positiveFeedback / totalFeedback) * 100);
  };

  render() {
    return (
      <Layout>
      <Section title="Please leave feedback">
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleIncrement}/>
      </Section>

      <Section title="Statistics">
      {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
        ) : (
        <Statistics
          good={this.state.good} 
          neutral={this.state.neutral} 
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage = {this.positiveFeedbackPercentage()} /> 
        )}
        </Section>
      </Layout>
  );
  };
};
