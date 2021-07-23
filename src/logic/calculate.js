import operate from './operate';

const calculate = (calcObj, btnName) => {
  let { total, next, operation } = calcObj;
  total = total === null ? 0 : total;
  next = next === null || next === '0' ? 0 : next;
  const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const ops = ['-', '+', 'x', '÷', '%'];
  let resTotal;
  if (btnName === '+/-') {
    if (operation !== null && numbers.includes(next.slice(-1))) {
      const nextArr = next.split('');
      const el = nextArr.find((el) => ops.includes(el));
      const getIndex = nextArr.lastIndexOf(el);
      let finalNum = nextArr.slice(getIndex + 1).join('');
      parseInt(finalNum, 10);
      finalNum *= -1;
      const newNext = nextArr.slice(0, getIndex + 1).join('');
      next = `${newNext}${finalNum.toString()}`;
      resTotal = total;
    } else if (operation !== null && !numbers.includes(next.slice(-1))) {
      resTotal = next;
      next = resTotal;
    } else if (operation === null) {
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
    const nextArr = next.split('');
    let count = 0;
    nextArr.forEach((el) => {
      if (ops.includes(el)) {
        count += 1;
      } else {
        count += 0;
      }
    });
    if (count === 1) {
      const el = nextArr.find((el) => ops.includes(el));
      const getIndex = nextArr.indexOf(el);
      const finalNum = nextArr.slice(getIndex + 1).join('');
      const result = operate(total, parseInt(finalNum, 10), operation);
      resTotal = result;
      next = result.toString();
    } else if (count > 1) {
      const getLastIndex = nextArr.indexOf('-');
      const finalNum = nextArr.slice(getLastIndex).join('');
      const result = operate(total, parseInt(finalNum, 10), operation);
      resTotal = result;
      next = result.toString();
    }
  } else if (numbers.includes(btnName)) {
    if (operation !== null) {
      if (next.slice(-1) === '.') {
        next = `${next}${btnName}`;
        resTotal = total;
      } else {
        next = `${next}${btnName}`;
        resTotal = total;
      }
    } else if (operation === null) {
      const nextStr = next.toString();
      if (nextStr.slice(-1) === '.') {
        next = `${next}${btnName}`;
        resTotal = 0;
      } else {
        next = next === 0 ? btnName : `${next}${btnName}`;
        resTotal = parseInt(next, 10);
      }
    }
  } else if (btnName === 'AC') {
    resTotal = 0;
    next = resTotal.toString();
    operation = null;
  } else if (ops.includes(btnName)) {
    if (btnName === '-') {
      next = `${next}${btnName}`;
      operation = 'subtraction';
    } else if (btnName === '+') {
      next = `${next}${btnName}`;
      operation = 'addition';
    } else if (btnName === 'x') {
      next = `${next}${btnName}`;
      operation = 'multiplication';
    } else if (btnName === '÷') {
      next = `${next}${btnName}`;
      operation = 'division';
    } else if (btnName === '%') {
      operation = 'percentage';
      const result = operate(total, 100, operation);
      total = result;
      next = total.toString();
    }
    resTotal = total;
  }
  total = resTotal;
  const obj = { total, next, operation };
  return obj;
};

export default calculate;
