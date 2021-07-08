import React from 'react';
import '../style/style.css';
import Button from './Button';

const ButtonPanel = () => {
  <div className="btnPanel-container">
    <div className="btns-row">
      <Button btnName="AC" />
      <Button btnName="+/-" />
      <Button btnName="%" />
      <Button btnName="÷" />
    </div>
    <div className="btns-row">
      <Button btnName="7" />
      <Button btnName="8" />
      <Button btnName="9" />
      <Button btnName="X" />
    </div>
    <div className="btns-row">
      <Button btnName="4" />
      <Button btnName="5" />
      <Button btnName="6" />
      <Button btnName="-" />
    </div>
    <div className="btns-row">
      <Button btnName="1" />
      <Button btnName="2" />
      <Button btnName="3" />
      <Button btnName="+" />
    </div>
    <div className="btns-row">
      <Button btnName="0" />
      <Button btnName="." />
      <Button btnName="=" />
    </div>
  </div>;
};

export default ButtonPanel;
