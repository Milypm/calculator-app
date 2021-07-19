import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let total;
  const oneBig = Big(numberOne);
  const twoBig = Big(numberTwo);
  if (operation === 'subtraction') {
    total = oneBig.minus(twoBig);
  } else if (operation === 'addition') {
    total = oneBig.plus(twoBig);
  } else if (operation === 'multiplication') {
    total = oneBig.times(twoBig);
  } else if (operation === 'division') {
    total = oneBig.div(twoBig);
  } else if (operation === 'module') {
    total = oneBig.mod(twoBig) * twoBig;
  }
  return total;
};

export default operate;
