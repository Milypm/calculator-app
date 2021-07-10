import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';

const Display = ({ next }) => (
  <div className="display-container">
    <p>{next}</p>
  </div>
);

Display.defaultProps = {
  next: '0',
};

Display.propTypes = {
  next: PropTypes.string,
};

export default Display;
