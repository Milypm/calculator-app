import calculate from '../calculate';

describe('calculate method', () => {
  test('executes an addition and returns the result as a string', () => {
    const obj = {
      total: 5,
      next: '5+5',
      operation: 'addition',
    };
    const result = calculate(obj, '=');
    expect(result.next).toBe('10');
  });
  test('executes a subtraction and returns the result as a string', () => {
    const obj = {
      total: 10,
      next: '10-3',
      operation: 'subtraction',
    };
    const result = calculate(obj, '=');
    expect(result.next).toBe('7');
  });
  test('executes a multiplication and returns the result as a string', () => {
    const obj = {
      total: 12,
      next: '12x2',
      operation: 'multiplication',
    };
    const result = calculate(obj, '=');
    expect(result.next).toBe('24');
  });
  test('executes a division and returns the result as a string', () => {
    const obj = {
      total: 80,
      next: '80÷4',
      operation: 'division',
    };
    const result = calculate(obj, '=');
    expect(result.next).toBe('20');
  });
  test('executes a division and returns the result as a string', () => {
    const obj = {
      total: 80,
      next: '80÷4',
      operation: 'division',
    };
    const result = calculate(obj, '=');
    expect(result.next).not.toBe('18');
  });
  test('returns a zero number as a string after clicking the AC button', () => {
    const obj = {
      total: 80,
      next: '80÷4',
      operation: 'division',
    };
    const result = calculate(obj, 'AC');
    expect(result.next).toBe('0');
  });
  test('converts a positive number to negative after clicking the +/- button', () => {
    const obj = {
      total: 80,
      next: '80÷4',
      operation: 'division',
    };
    const result = calculate(obj, '+/-');
    expect(result.next).toBe('80÷-4');
  });
  test('returns the percentage value as a string of a given number', () => {
    const obj = {
      total: 50,
      next: '50',
      operation: null,
    };
    const result = calculate(obj, '%');
    expect(result.next).toBe('0.5');
  });
});
