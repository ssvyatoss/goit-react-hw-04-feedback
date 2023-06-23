import PropTypes from 'prop-types';

export const FeedbackStatisticsCounter = ({
  points,
  total,
  positivePercentage,
}) => {
  return (<>
  <ul>
    {points.map(([key, value]) => (
        <li key={key}>
            points {key} : {value};
        </li>
    ))}
    <li>Total: {total}</li>
    <li>Positive feedback: {positivePercentage}%</li>
  </ul>
  </>)
};


FeedbackStatisticsCounter.propTypes = {
  points: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))),
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};