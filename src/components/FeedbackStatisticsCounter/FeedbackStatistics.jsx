import PropTypes from 'prop-types'
import { FeedbackStatisticsStyled, StatisticsButtonStyled } from './FeedbackStatistics.styled';

export const FeedbackStatistics = ({rate, handleChangeRate}) => {
  return (
    <FeedbackStatisticsStyled>
    {rate.map(rateButton => {
        return (
            <StatisticsButtonStyled key={rateButton} type="button" onClick={() => {
                handleChangeRate(rateButton);
            }}>
                {rateButton}
            </StatisticsButtonStyled>
        )
    })}
    </FeedbackStatisticsStyled>
  )
}

FeedbackStatistics.propTypes = {
    rate: PropTypes.arrayOf(PropTypes.string),
    handleChangeRate: PropTypes.func,
}