import Big from 'big.js';

const operate = ({ numberOne, numberTwo, operation }) => {
  let total;
  const oneBig = Big(numberOne);
  const twoBig = Big(numberTwo);
  if (operation === '-') {
    total = oneBig.minus(twoBig);
  } else if (operation === '+') {
    total = oneBig.plus(twoBig);
  } else if (operation === 'x') {
    total = oneBig.times(twoBig);
  } else if (operation === '÷') {
    total = oneBig.div(twoBig);
  } else if (operation === '%') {
    total = oneBig.mod(twoBig);
  }
  return total;
};

export default operate;
