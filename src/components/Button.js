import React from 'react';
import '../style/style.css';

export class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return(
      <div className="button-container">
        <p>{this.props.btnName}</p>
      </div>
    )
  }
}