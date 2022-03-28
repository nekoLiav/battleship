/* eslint-disable no-undef */
import gameBoard from '../factories/gameBoard';

test('board array contains 100 subarrays, each containing an x, y coordinate and a value indicating whether the space has been attacked (0 or 1)', () => {
  const player = gameBoard();
  expect(player.board[13]).toEqual([3, 1, 0]);
});

test('when ship is placed, it occupies its length in spaces horizontally', () => {
  const player = gameBoard();
  player.placeShip(player.ships.carrier, 0, 0, 0);
  expect(
    player.board[0][3] &&
      player.board[1][3] &&
      player.board[2][3] &&
      player.board[3][3] &&
      player.board[4][3]
  ).toEqual('carrier');
});

test('when ship is placed, it occupies its length in spaces vertically', () => {
  const player = gameBoard();
  player.placeShip(player.ships.carrier, 1, 0, 0);
  expect(
    player.board[0][3] &&
      player.board[10][3] &&
      player.board[20][3] &&
      player.board[30][3] &&
      player.board[40][3]
  ).toEqual('carrier');
});

test('when all ships are placed, placedShips array is the appropriate length', () => {
  const player = gameBoard();
  player.placeShip(player.ships.carrier, 1, 0, 0);
  player.placeShip(player.ships.battleship, 1, 1, 0);
  player.placeShip(player.ships.destroyer, 1, 2, 0);
  player.placeShip(player.ships.submarine, 1, 3, 0);
  player.placeShip(player.ships.patrolboat, 1, 4, 0);
  expect(player.placedShips.length).toEqual(5);
});

test('board array responds by flipping the indicated array element from 0 to 1 when attacked', () => {
  const player = gameBoard();
  player.receiveAttack(13);
  expect(player.board[13][2]).toEqual(1);
});

test('validPlacementsreturns oob if placement would be out of bounds horizontally', () => {
  const player = gameBoard();
  expect(player.validPlacements(player.ships.carrier, 0, 6, 0, 60)).toEqual(
    'oob'
  );
});

test('validPlacements returns oob if placement would be out of bounds vertically', () => {
  const player = gameBoard();
  expect(player.validPlacements(player.ships.carrier, 1, 0, 6, 60)).toEqual(
    'oob'
  );
});

test('validPlacements returns overlap appropriately', () => {
  const player = gameBoard();
  player.placeShip(player.ships.carrier, 1, 3, 0);
  expect(player.validPlacements(player.ships.battleship, 0, 0, 0, 0)).toEqual(
    'overlap'
  );
});

test('validPlacements returns an array of valid indexes if placement is neither out of bounds nor overlapping', () => {
  const player = gameBoard();
  expect(player.validPlacements(player.ships.carrier, 1, 0, 0, 0)).toEqual([
    0, 10, 20, 30, 40,
  ]);
});

test('sunkShips correctly reports the number of ships that return true from their sunk functions', () => {
  const player = gameBoard();
  player.ships.patrolboat.hit(0);
  player.ships.patrolboat.hit(1);
  expect(player.sunkShips()).toEqual(1);
});
