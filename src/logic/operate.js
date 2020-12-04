import Big from 'big.js';

export default function operate(numOne, numTwo, operation) {
  const x = Big(numOne);
  const y = Big(numTwo);
  switch (operation) {
    case '+':
      return x.plus(y).toNumber().toString();
    case '-':
      return x.minus(y).toNumber().toString();
    case 'X':
      return x.times(y).toNumber().toString();
    case '÷':
      return x.div(y).toNumber().toString();
    default:
      return '0.0';
  }
}
