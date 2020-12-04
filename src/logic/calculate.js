import operate from './operate';

export default function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;

  if (operation === '=' && next === null) {
    total = null;
    operation = null;
  }

  if (Number(buttonName)) {
    if (next === '0' || (operation && next === null) || !next) next = buttonName;
    else next += buttonName;
  }

  if (buttonName !== operation) {
    switch (buttonName) {
      case '+/-' && buttonName !== 0:
        // total *= -1;
        next *= -1;
        break;
      case '%':
        next /= 100;
        break;
      case '.':
        if (next % 1 === 0) next += '.';
        break;
      case 'A/C':
        total = null;
        next = null;
        operation = null;
        break;
      case '+':
      case '-':
      case 'X':
      case '/':
        total = next;
        next = null;
        operation = buttonName;
        break;
      case '=':
        if (Number(next) && Number(total)) {
          total = operate(total, next, operation);
          next = null;
          operation = buttonName;
        }
        break;
      default:
        break;
    }
  }

  return { total, next, operation };
}
