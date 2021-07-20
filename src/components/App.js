import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClick = (btnName) => {
    const obj = { total, next, operation };
    const calcObj = calculate(obj, btnName);
    setTotal(calcObj.total);
    setNext(calcObj.next);
    setOperation(calcObj.operation);
  };

  return (
    <>
      <div>
        <Display value={next} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
