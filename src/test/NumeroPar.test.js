import { esNumeroPar } from '../NumeroPar';

test('debe devolver true para números pares', () => {
  expect(esNumeroPar(2)).toBe(true);
  expect(esNumeroPar(0)).toBe(true);
  expect(esNumeroPar(-4)).toBe(true);
});

test('debe devolver false para números impares', () => {
  expect(esNumeroPar(3)).toBe(false);
  expect(esNumeroPar(7)).toBe(false);
  expect(esNumeroPar(-1)).toBe(false);
});