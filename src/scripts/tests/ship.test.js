/* eslint-disable no-undef */
import { player } from '../game/players';

test('ship hits array is equivalent in size to its length', () => {
  expect(player.ships.carrier.hits.length).toEqual(player.ships.carrier.length);
});

test('ship hits array responds as intended by hit function', () => {
  player.ships.carrier.hit(2);
  expect(player.ships.carrier.hits).toEqual([0, 0, 1, 0, 0]);
});

test('ship sunk function returns false if ship hit', () => {
  player.ships.carrier.hit(2);
  expect(player.ships.carrier.sunk()).toEqual(false);
});

test('ship sunk function returns true if ship hits array is fully hit', () => {
  player.ships.carrier.hit(0);
  player.ships.carrier.hit(1);
  player.ships.carrier.hit(2);
  player.ships.carrier.hit(3);
  player.ships.carrier.hit(4);
  expect(player.ships.carrier.sunk()).toEqual(true);
});
