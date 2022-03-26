/* eslint-disable no-undef */
import ship from '../factories/ship';

const testShip = ship(7, 'reallybigshipgoespewpew', 'billy');

test('ship hits array is equivalent in size to its length', () => {
  expect(testShip.hits.length).toEqual(testShip.length);
});

test('ship hits array responds as intended by hit function', () => {
  testShip.hit(2);
  expect(testShip.hits).toEqual([0, 0, 1, 0, 0, 0, 0]);
});

test('ship sunk function returns false if ship hit', () => {
  testShip.hit(2);
  expect(testShip.sunk()).toEqual(false);
});

test('ship sunk function returns true if ship hits array is fully hit', () => {
  testShip.hit(0);
  testShip.hit(1);
  testShip.hit(2);
  testShip.hit(3);
  testShip.hit(4);
  testShip.hit(5);
  testShip.hit(6);
  expect(testShip.sunk()).toEqual(true);
});
