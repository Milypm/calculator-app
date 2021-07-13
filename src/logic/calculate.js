import operate from './operate';

const calculate = (calcObj, btnName) => {
  let { total, next, operation } = calcObj;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ops = ['-', '+', 'x', '÷', '%'];
  total = total === null ? 0 : total;
  next = next === null ? 0 : next;
  let resTotal;
  if (btnName === '+/-') {
    if (operation !== null) {
      parseInt(next, 10);
      next *= -1;
      resTotal = operate(total, next, operation);
      next = resTotal.toString();
    } else {
      parseInt(next, 10);
      next *= -1;
      resTotal = total;
      next = next.toString();
    }
  } else if (btnName === '.') {
    if (next !== '0') {
      next = `${next}.`;
    } else {
      next = '0.';
    }
    resTotal = total;
  } else if (btnName === '=') {
    resTotal = operate(total, parseInt(next, 10), operation);
    next = resTotal.toString();
  } else if (numbers.includes(btnName)) {
    const nextStr = next.toString();
    if (operation !== null) {
      if (nextStr.includes('.')) {
        next = `${next}.${btnName}`;
        resTotal = operate(total, parseInt(next, 10), operation);
      } else {
        next = btnName;
        resTotal = operate(total, parseInt(next, 10), operation);
      }
    } else if (operation === null) {
      if (nextStr.includes('.')) {
        next = `${next}${btnName}`;
        resTotal = 0;
      } else {
        next = btnName;
        resTotal = 0;
      }
    }
  } else if (btnName === 'AC') {
    resTotal = 0;
    next = resTotal.toString();
    operation = null;
  } else if (ops.includes(btnName)) {
    if (btnName === '-') {
      operation = 'subtraction';
    } else if (btnName === '+') {
      operation = 'addition';
    } else if (btnName === 'x') {
      operation = 'multiplication';
    } else if (btnName === '÷') {
      operation = 'division';
    } else if (btnName === '%') {
      operation = 'module';
    }
    if (total === 0) {
      resTotal = 0;
    } else {
      resTotal = operate(total, parseInt(next, 10), operation);
    }
  }
  total = resTotal;
  console.log('log total', total);
  console.log('log next', next);
  const obj = { total, next, operation };
  console.log('log object', obj);
  return obj;
};

export default calculate;
