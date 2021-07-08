import React from 'react';
import '../style/style.css';
import Button from './Button';

export class ButtonPanel extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div>
        <div className="group-one">
          <Button btnName="AC" />
          <Button btnName="+/-" />
          <Button btnName="%" />
          <Button btnName="÷" />
        </div>
        <div className="group-two">
          <Button btnName="7" />
          <Button btnName="8" />
          <Button btnName="9" />
          <Button btnName="X" />
        </div>
        <div className="group-three">
          <Button btnName="4" />
          <Button btnName="5" />
          <Button btnName="6" />
          <Button btnName="-" />
        </div>
        <div className="group-four">
          <Button btnName="1" />
          <Button btnName="2" />
          <Button btnName="3" />
          <Button btnName="+" />
        </div>
        <div className="group-five">
          <Button btnName="0" />
          <Button btnName="." />
          <Button btnName="=" />
        </div>
      </div>
    )
  }
}