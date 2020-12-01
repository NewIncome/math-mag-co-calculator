import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  const x = Big(numOne);
  const y = Big(numTwo);
  if (operation === '+') return x.plus(y);
  if (operation === '-') return x.minus(y);
  if (operation === '*') return x.times(y);
  if (operation === '/') return x.div(y);

  return null;
}
