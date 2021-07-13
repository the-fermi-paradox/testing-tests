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
});

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

test('caesar: shifts string', () => {
  expect(caesar('mary')).toEqual('pdub');
});

test('caesar: handles punctuation', () => {
  expect(caesar('/,gk')).toEqual(',/jn');
});

test('caesar: preserves case', () => {
  expect(caesar('mArY')).toEqual('pDuB');
});

test('caesar: handles sentences', () => {
  expect(caesar('Mary had a little lamb, and that was great for her. Mary had a friend, too! Her name was Sarah'))
    .toEqual('Pdub kdg d olwwoh odpe, dqg wkdw zdv juhdw iru khu. Pdub kdg d iulhqg, wrr! Khu qdph zdv Vdudk');
});

test('analyze: contains right properties', () => {
  expect(analyze([1,2,3,4,5,6])).toEqual(expect.objectContaining({
    average: expect.any(Number);
    min: expect.any(Number);
    max: expect.any(Number);
    length: expect.any(Number);
  }));
});

const array = analyze([1,2,3,4,5,6]);

test('analyze: average is the average', () => {
  expect(array.average).toEqual(3.5);
});

test('analyze: min is the min', () => {
  expect(array.min).toEqual(1);
});

test('analyze: max is the max', () => {
  expect(array.max).toEqual(6);
});

test('analyze: length is the length', () => {
  expect(array.length).toEqual(6);
});
