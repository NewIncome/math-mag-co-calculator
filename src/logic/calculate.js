export default function calculate(calculatorData, buttonName) {
  let { total, next } = calculatorData;
  const { operation } = calculatorData;

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  }
  if (next && buttonName === '%') next /= 100;
  if (total && buttonName === '%') total /= 100;

  return { total, next, operation };
}
