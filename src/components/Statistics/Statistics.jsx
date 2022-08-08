import PropTypes from 'prop-types';
import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
        <ul>
          <li>
            <p className={s.statistic}>Good: {good}</p>
          </li>
          <li>
            <p className={s.statistic}>Neutral: {neutral}</p>
          </li>
          <li>
            <p className={s.statistic}>Bad: {bad}</p>
          </li>
          <li>
            <p className={s.statistic}>
              Total: {total}
            </p>
                </li>
             <li>
            <p className={s.statistic}>
              Positive feedback: {positivePercentage} %
            </p>
          </li>
        </ul>
  )

}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
