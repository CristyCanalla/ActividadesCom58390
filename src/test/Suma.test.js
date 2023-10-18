import {sum} from '../Suma'

test('suma 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('suma -1 + 1 es igual a 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('suma 0 + 0 es igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});

