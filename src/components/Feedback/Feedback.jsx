import React, { Component } from 'react';
import { FeedbackStatistics } from 'components/FeedbackStatisticsCounter/FeedbackStatistics';
import { FeedbackStyled } from './Feedback.styled';
import { FeedbackStatisticsCounter } from 'components/FeedbackStatisticsCounter/FeedbackStatisticsCounter';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleChangeRate = key => {
    this.setState(prevState => ({
      [key]: prevState[key] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acum, el) => acum + el, 0);
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <FeedbackStyled>
        <Section title="Please leave feedback">
          <FeedbackStatistics
            rate={Object.keys(this.state)}
            handleChangeRate={this.handleChangeRate}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <FeedbackStatisticsCounter
              points={Object.entries(this.state)}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedbacks yet!"/>
          )}
        </Section>
      </FeedbackStyled>
    );
  }
}

export default Feedback;
