import operate from './operate';

export default function calculate(calculatorData, buttonName) {
  let { total, next, operation } = calculatorData;

  console.log('next at start:');
  if (Number(buttonName)) {
    if (next === '0') next = buttonName;
    else next += buttonName;
  }
  console.log(next);
  console.log('buttonName:');
  console.log(buttonName);
  console.log(typeof buttonName);
  console.log(buttonName === '-' ? 'MINUS!!!' : 'Fucked');
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
      console.log('GOT INTO THE OPERATIONS!!!');
      total = next;
      next = '0';
      operation = buttonName;
      break;
    case '=':
      total = operate(total, next, operation);
      next = null;
      break;
    default:
      break;
  }

  console.log('next:');
  console.log(next);

  return { total, next, operation };
}
