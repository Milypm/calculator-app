import React from 'react';
import PropTypes from 'prop-types';
import '../style/style.css';

const Display = (props) => {
  const { value } = props;
  return (
    <div className="display-container">
      <p>{value}</p>
    </div>
  );
};

Display.defaultProps = {
  value: '0',
};

Display.propTypes = {
  value: PropTypes.string,
};

export default Display;
