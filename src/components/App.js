import React, { useState } from 'react';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../style/style.css';

const App = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState('0');
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
        <div className="calc-container display-container">
          <p>{next}</p>
        </div>
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
