import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';

function Display({ result }) {
  return (
    <div className="display-container">
      <p>{result}</p>
    </div>
  );
}

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string,
};

export default Display;
