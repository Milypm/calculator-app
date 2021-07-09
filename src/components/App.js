import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    const { total } = this.state;
    const { next } = this.state;
    const { operation } = this.state;
    const obj = { total, next, operation };
    const calcObj = calculate(obj, btnName);
    this.setState({
      total: calcObj.total,
      next: calcObj.next,
      operation: calcObj.operation,
    });
  }

  render() {
    const { next } = this.state;
    return (
      <>
        <Display value={next} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
