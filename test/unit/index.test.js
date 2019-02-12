var ackermann = require('../../src/index')

test('calculates (0,0) to equal 1', () => {
  expect(ackermann(0,0)).toBe(1);
});

test('calculates (0,1) to equal 2', () => {
  expect(ackermann(0,1)).toBe(2);
});

test('calculates (0,2) to equal 3', () => {
  expect(ackermann(0,2)).toBe(3);
});

test('calculates (0,3) to equal 4', () => {
  expect(ackermann(0,3)).toBe(4);
});

test('calculates (0,4) to equal 5', () => {
  expect(ackermann(0,4)).toBe(5);
});

test('calculates (1,0) to equal 2', () => {
  expect(ackermann(1,0)).toBe(2);
});

test('calculates (1,1) to equal 3', () => {
  expect(ackermann(1,1)).toBe(3);
});

test('calculates (1,2) to equal 4', () => {
  expect(ackermann(1,2)).toBe(4);
});

test('calculates (1,3) to equal 5', () => {
  expect(ackermann(1,3)).toBe(5);
});

test('calculates (1,4) to equal 6', () => {
  expect(ackermann(1,4)).toBe(6);
});

test('calculates (2,0) to equal 3', () => {
  expect(ackermann(2,0)).toBe(3);
});

test('calculates (2,1) to equal 5', () => {
  expect(ackermann(2,1)).toBe(5);
});

test('calculates (2,2) to equal 7', () => {
  expect(ackermann(2,2)).toBe(7);
});

test('calculates (2,3) to equal 9', () => {
  expect(ackermann(2,3)).toBe(9);
});

test('calculates (2,4) to equal 11', () => {
  expect(ackermann(2,4)).toBe(11);
});

test('calculates (3,0) to equal 5', () => {
  expect(ackermann(3,0)).toBe(5);
});

test('calculates (3,1) to equal 13', () => {
  expect(ackermann(3,1)).toBe(13);
});

test('calculates (3,2) to equal 29', () => {
  expect(ackermann(3,2)).toBe(29);
});

test('calculates (3,3) to equal 61', () => {
  expect(ackermann(3,3)).toBe(61);
});

test('calculates (3,4) to equal 125', () => {
  expect(ackermann(3,4)).toBe(125);
});

test('calculates (4,0) to equal 13', () => {
  expect(ackermann(4,0)).toBe(13);
});

test('returns error for (a,b)', () => {
  expect(() => {
    ackermann('a','b');
  }).toThrow();
});
