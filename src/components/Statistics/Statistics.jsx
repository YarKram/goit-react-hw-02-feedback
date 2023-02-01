// import React from 'react';
import PropTypes from 'prop-types';
import { List } from './Statistics.styled';

const Statistics = ({ good, bad, neutral, total, positivePercentage }) => (
  <div>
    <List>
      <li>Good {good}</li>
      <li>Neutral {neutral}</li>
      <li>Bad {bad}</li>
      <li>Total {total}</li>
      <li>Positive feedback: {positivePercentage}</li>
    </List>
  </div>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
