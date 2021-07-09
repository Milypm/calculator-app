import operate from './operate';

const calculate = ({ calcObj, btnName }) => {
  let { total, next, operation } = calcObj;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const getTotal = total;
  let getNext = next;
  let getOperation = operation;
  let resTotal;

  if (btnName === '+/-') {
    parseInt(getNext, 10);
    getNext *= -1;
    resTotal = operate(getTotal, getNext, btnName);
  } else if (btnName === '.') {
    if (getNext !== '0') {
      getNext = `${getNext}.`;
    } else {
      getNext = '0.';
    }
  } else if (btnName === '=') {
    resTotal = operate(getTotal, parseInt(getNext, 10), btnName);
  } else if (numbers.includes(btnName)) {
    getNext = btnName;
    resTotal = operate(getTotal, parseInt(getNext, 10), btnName);
  } else if (btnName === 'AC') {
    resTotal = 0;
  } else {
    resTotal = operate(getTotal, parseInt(getNext, 10), btnName);
    if (btnName === '-') {
      getOperation = 'subtraction';
    } else if (btnName === '+') {
      getOperation = 'addition';
    } else if (btnName === 'x') {
      getOperation = 'multiplication';
    } else if (btnName === '÷') {
      getOperation = 'division';
    } else if (btnName === '%') {
      getOperation = 'module';
    }
  }

  total = resTotal;
  next = toString(resTotal);
  operation = getOperation;

  return calcObj;
};

export default calculate;
