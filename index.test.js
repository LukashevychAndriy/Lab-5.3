const { expect } = require('@jest/globals');
const { f } = require('./functions');

test('', () => {
  expect(f(100)).toBe(1.386795555294441);
});

test('', () => {
  expect(f(0)).toBe(0);
});

test('', () => {
  expect(f(-9)).toBe(-0.44427135565772247);
});