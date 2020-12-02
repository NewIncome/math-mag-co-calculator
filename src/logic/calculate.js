import Big from 'big.js';

export default function calculate(calculatorData, buttonName) {
  let { total, next, operation } = Big(calculatorData);

  switch (buttonName) {
    case '+/-':
      total *= -1;
      next *= -1;
      break;
    case '%':
      total = total.div(100);
      break;
    case '.':
      if (total.mod(1) === 0) total.plus('.');
      break;
    case 'A/C':
      return 0;
    default:
      break;
  }

  return { total, next, operation };
}
