import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../style/style.css';

const ButtonPanel = ({ props }) => {
  const { clickHandler } = props;
  // const handleClick = (btnName) => props.clickHandler(btnName);

  return (
    <div className="btnPanel-container">
      <div className="btns-row">
        <Button btnName="AC" clickHandler={clickHandler('AC')} />
        <Button btnName="+/-" clickHandler={clickHandler('+/-')} />
        <Button btnName="%" clickHandler={clickHandler('%')} />
        <Button btnName="÷" clickHandler={clickHandler('÷')} />
      </div>
      <div className="btns-row">
        <Button btnName="7" clickHandler={clickHandler('7')} />
        <Button btnName="8" clickHandler={clickHandler('8')} />
        <Button btnName="9" clickHandler={clickHandler('9')} />
        <Button btnName="x" clickHandler={clickHandler('x')} />
      </div>
      <div className="btns-row">
        <Button btnName="4" clickHandler={clickHandler('4')} />
        <Button btnName="5" clickHandler={clickHandler('5')} />
        <Button btnName="6" clickHandler={clickHandler('6')} />
        <Button btnName="-" clickHandler={clickHandler('-')} />
      </div>
      <div className="btns-row">
        <Button btnName="1" clickHandler={clickHandler('1')} />
        <Button btnName="2" clickHandler={clickHandler('2')} />
        <Button btnName="3" clickHandler={clickHandler('3')} />
        <Button btnName="+" clickHandler={clickHandler('+')} />
      </div>
      <div className="btns-row">
        <Button btnName="0" clickHandler={clickHandler('0')} />
        <Button btnName="." clickHandler={clickHandler('.')} />
        <Button btnName="=" clickHandler={clickHandler('=')} />
      </div>
    </div>
  );
};

ButtonPanel.defaultProps = {
  props: false,
};

ButtonPanel.propTypes = {
  props: PropTypes.func,
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
