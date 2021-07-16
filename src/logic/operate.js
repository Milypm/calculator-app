import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  let obj;
  const oneBig = Big(numberOne);
  const twoBig = Big(numberTwo);
  if (operation === 'subtraction') {
    obj = oneBig.minus(twoBig).c;
    total = obj.length === 1 ? oneBig.minus(twoBig) : parseInt(obj.join(''), 10);
  } else if (operation === 'addition') {
    obj = oneBig.plus(twoBig).c;
    total = obj.length === 1 ? oneBig.plus(twoBig) : parseInt(obj.join(''), 10);
  } else if (operation === 'multiplication') {
    obj = oneBig.times(twoBig).c;
    total = obj.length === 1 ? oneBig.times(twoBig) : parseInt(obj.join(''), 10);
  } else if (operation === 'division') {
    total = oneBig.div(twoBig);
  } else if (operation === 'module') {
    obj = oneBig.mod(twoBig).c;
    total = obj.length === 1 ? oneBig.mod(twoBig) : parseInt(obj.join(''), 10);
  }
  return total;
};

export default operate;
