/* eslint-disable no-undef */
import { player } from '../game/players';

test('board array contains 100 subarrays, each containing an x, y coordinate and a value indicating whether the space has been attacked (0 or 1)', () => {
  expect(player.board[13]).toEqual([3, 1, 0]);
});

test('when ship is placed, it occupies the intended number of spaces horizontally', () => {
  player.placeShip(player.ships.carrier, 0, 0, 0);
  expect(
    player.board[0][3] &&
      player.board[1][3] &&
      player.board[2][3] &&
      player.board[3][3] &&
      player.board[4][3]
  ).toEqual('carrier');
});

test('when ship is placed, it occupies the intended number of spaces vertically', () => {
  player.placeShip(player.ships.carrier, 1, 0, 0);
  expect(
    player.board[0][3] &&
      player.board[10][3] &&
      player.board[20][3] &&
      player.board[30][3] &&
      player.board[40][3]
  ).toEqual('carrier');
});

test('board array responds as intended when attacked', () => {
  player.receiveAttack(13);
  expect(player.board[13][2]).toEqual(1);
});
