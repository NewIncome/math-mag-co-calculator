import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  const x = Big(numOne);
  const y = Big(numTwo);
  switch (operation) {
    case '+':
      return x.plus(y);
    case '-':
      return x.minus(y);
    case '*':
      return x.times(y);
    case '/':
      return x.div(y);
    default:
      return '0';
  }
}
