import calculate from '../../../logic/calculate';

// it('', () => {});
describe('Arithmetic functions', () => {
  it('sums 2 numbers', () => {
    const data = {
      total: 8,
      next: 10,
      operation: '+',
    };
    expect(calculate(data, '=').total).toBe('18');
  });

  it('substracts 2 numbers', () => {
    const data = {
      total: 100,
      next: 30,
      operation: '-',
    };
    expect(calculate(data, '=').total).toBe('70');
  });

  it('multiplies 2 numbers', () => {
    const data = {
      total: 8,
      next: 10,
      operation: 'X',
    };
    expect(calculate(data, '=').total).toBe('80');
  });

  it('divides 2 numbers', () => {
    const data = {
      total: 100,
      next: 20,
      operation: '÷',
    };
    expect(calculate(data, '=').total).toBe('5');
  });

  it('can use decimal numbers', () => {
    const data = {
      total: null,
      next: 8,
      operation: null,
    };
    expect(calculate(data, '.').next).toBe('8.');
  });

  it('can do percentages', () => {
    const data = {
      total: null,
      next: 8,
      operation: null,
    };
    expect(calculate(data, '%').next).toBe(0.08);
  });
});
