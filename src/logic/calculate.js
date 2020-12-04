import operate from './operate';

export default function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;

  if (Number(buttonName)) {
    if (next === '0' || (operation && next === null) || !next) next = buttonName;
    else next += buttonName;
  }

  if (buttonName !== operation) {
    if (operation && ['+', '-', 'X', '/'].includes(buttonName)) {
      next = total;
      total = null;
      operation = null;
    }

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
        next = '0';
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
        }
        break;
      default:
        break;
    }
  }

  return { total, next, operation };
}
