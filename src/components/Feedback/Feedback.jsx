import React, { useReducer } from 'react';
import { FeedbackStatistics } from 'components/FeedbackStatisticsCounter/FeedbackStatistics';
import { FeedbackStyled } from './Feedback.styled';
import { FeedbackStatisticsCounter } from 'components/FeedbackStatisticsCounter/FeedbackStatisticsCounter';
import { Section } from 'components/Section/Section';
import { Notification } from 'components/Notification/Notification';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state, 
        [action.payload]: state[action.payload] + 1,
      };
      default: 
      return state;
  }
}


export const Feedback = () => {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };
  const [state, dispatch] = useReducer(reducer, initialState);


  const handleChangeRate = key => {
    // this.setState(prevState => ({
    //   [key]: prevState[key] + 1,
    // }));
    dispatch({type: 'INCREMENT', payload: key});
  };

  const countTotalFeedback = () => {
    return Object.values(state).reduce((acum, el) => acum + el, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return ((state.good / countTotalFeedback()) * 100).toFixed(0);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
    return (
      <FeedbackStyled>
        <Section title="Please leave feedback">
          <FeedbackStatistics
            rate={Object.keys(state)}
            handleChangeRate={handleChangeRate}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <FeedbackStatisticsCounter
              points={Object.entries(state)}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="No feedbacks yet!"/>
          )}
        </Section>
      </FeedbackStyled>
    );
  };

