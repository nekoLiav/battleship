import { ship } from '../logic/ship'

test('ships are created with an array containing quantity of indexes equal to first argument, populated with 0', () => {
  const destroyer = ship(3, 'destroyer');
  expect(destroyer.shipArray).toEqual([0, 0, 0]);
});

test('hit method targets the correct array index and flips it to 1', () => {
  const destroyer = ship(3, 'destroyer');
  destroyer.hit(0);
  expect(destroyer.shipArray).toEqual([1, 0, 0]);
});

test('deth occurs when all all array indexes are hit/equal 1', () => {
  const destroyer = ship(3, 'destroyer');
  destroyer.hit(0);
  destroyer.hit(1);
  destroyer.hit(2);
  expect(destroyer.isSunk()).toBe('deth');
});