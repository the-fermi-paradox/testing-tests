import capitalize from './capitalize';
import reverseString from './reverseString';
import calculator from './calculator';

test('capitalize: first letter capitalized', () => {
  expect(capitalize('Letter')).toMatch(/^[A-Z]/);
});

test('capitalize: word is still the original word', () => {
  expect(capitalize('Letter')).toMatch(/letter/i);
});

test('reverseString: string is properly reversed', () => {
  expect(reverseString('mary')).toBe('yram');
});

test('reverseString: capitalization is preserved', () => {
  expect(reverseString('mArY')).toBe('YrAm');
});

test('reverseString: sentences are properly reversed', () => {
  expect(reverseString('Mary had a little lamb'))
    .toBe('bmal elttil a dah yraM');
})

test('calculator: contains +, -, x, /', () => {
  expect(calculator).toEqual(expect.objectContaining({
    add: expect.any(Function),
    subtract: expect.any(Function),
    multiply: expect.any(Function),
    divide: expect.any(Function),
  }));
});

test('calculator: add adds', () => {
  expect(calculator.add(2, 2)).toEqual(4);
});

test('calculator: subtract subtracts', () => {
  expect(calculator.subtract(4, 2)).toEqual(2);
});

test('calculator: multiply multiplies', () => {
  expect(calculator.multiply(8, 2)).toEqual(16);
});

test('calculator: divide divides', () => {
  expect(calculator.divide(8, 4)).toEqual(2);
});
