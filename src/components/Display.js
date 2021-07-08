import React from 'react';
import '../style/style.css';

export class Display extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const defResult = '0';
    return(
      <div className="display-container">
        <p>{this.props.result}</p>
      </div>
    )
  }
}