import PropTypes from 'prop-types';

export const StatisticsFeedback =({good, neutral, bad, total, positivePercentage})=> {
        return(
            <ul>
                <li>Good:{good}</li>
                <li>Neutral:{neutral}</li>
                <li>Bud:{bad}</li>
                <li>Total:{total}</li>
                <li>Positive feedback:{positivePercentage} %</li>
            </ul>
        )
}


StatisticsFeedback.propTypes ={
    good:PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage:PropTypes.number.isRequired,
}