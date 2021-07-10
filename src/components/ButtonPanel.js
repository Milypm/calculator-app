import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../style/style.css';

const ButtonPanel = (props) => {
  const { clickHandler } = props;
  const handleClick = (btnName) => clickHandler(btnName);

  return (
    <div className="btnPanel-container">
      <div className="btns-row">
        <Button btnName="AC" clickHandler={handleClick('AC')} />
        <Button btnName="+/-" clickHandler={handleClick('+/-')} />
        <Button btnName="%" clickHandler={handleClick('%')} />
        <Button btnName="÷" clickHandler={handleClick('÷')} />
      </div>
      <div className="btns-row">
        <Button btnName="7" clickHandler={handleClick('7')} />
        <Button btnName="8" clickHandler={handleClick('8')} />
        <Button btnName="9" clickHandler={handleClick('9')} />
        <Button btnName="x" clickHandler={handleClick('x')} />
      </div>
      <div className="btns-row">
        <Button btnName="4" clickHandler={handleClick('4')} />
        <Button btnName="5" clickHandler={handleClick('5')} />
        <Button btnName="6" clickHandler={handleClick('6')} />
        <Button btnName="-" clickHandler={handleClick('-')} />
      </div>
      <div className="btns-row">
        <Button btnName="1" clickHandler={handleClick('1')} />
        <Button btnName="2" clickHandler={handleClick('2')} />
        <Button btnName="3" clickHandler={handleClick('3')} />
        <Button btnName="+" clickHandler={handleClick('+')} />
      </div>
      <div className="btns-row">
        <Button btnName="0" clickHandler={handleClick('0')} />
        <Button btnName="." clickHandler={handleClick('.')} />
        <Button btnName="=" clickHandler={handleClick('=')} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  // props: PropTypes.func.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
