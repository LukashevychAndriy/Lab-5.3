const { expect } = require('@jest/globals');
const { f } = require('./functions');

test('f should return value based on x argument', () => {
  expect(f(100)).toBe(1.386795555294441);
  expect(f(0)).toBe(0);
  expect(f(-9)).toBe(-0.44427135565772247);
});
