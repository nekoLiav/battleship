import { gameBoard } from "../scripts/gameBoard";

test('receiveAttack function targets correct boardArray index based on provided coordinates', () => {
  const testBoard = gameBoard();
  testBoard.receiveAttack(0, 2);
  expect(testBoard.boardArray[20][2]).toEqual(1);
});

test('receiveAttack function detects a ship at the specified coordinates', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  testBoard.receiveAttack(0, 2);
  expect(testBoard.boardArray[20][3]).toEqual('destroyer');
});

test('hit function appropriately "damages" the detected ship in vertical orientation', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  testBoard.receiveAttack(0, 2);
  expect(testBoard.ships.destroyer.shipArray).toEqual([0, 0, 1]);
});

test('hit function appropriately "damages" the detected ship in horizontal orientation', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 1, 0);
  testBoard.receiveAttack(2, 0);
  expect(testBoard.ships.destroyer.shipArray).toEqual([0, 0, 1]);
});

test('placeShip function adds ship information to indicated beginning index with vertical orientation', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  expect(testBoard.boardArray[0]).toEqual([0, 0, 0, 'destroyer', 0]);
});

test('placeShip function adds ship information to all indexes it should occupy with vertical orientation (1)', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  expect(testBoard.boardArray[10]).toEqual([0, 1, 0, 'destroyer', 1]);
});

test('placeShip function adds ship information to all indexes it should occupy with vertical orientation (2)', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  expect(testBoard.boardArray[20]).toEqual([0, 2, 0, 'destroyer', 2]);
});

test('placeShip function adds ship information to indicated beginning index with horizontal orientation', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 1, 0);
  expect(testBoard.boardArray[0]).toEqual([0, 0, 0, 'destroyer', 0]);
});

test('placeShip function adds ship information to all indexes it should occupy with horizontal orientation (1)', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 1, 0);
  expect(testBoard.boardArray[1]).toEqual([1, 0, 0, 'destroyer', 1]);
});

test('placeShip function adds ship information to all indexes it should occupy with horizontal orientation(2)', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 1, 0);
  expect(testBoard.boardArray[2]).toEqual([2, 0, 0, 'destroyer', 2]);
});

test('bulky function to confirm endgame state is detected properly', () => {
  const testBoard = gameBoard();
  testBoard.ships.carrier.hit(0);
  testBoard.ships.carrier.hit(1);
  testBoard.ships.carrier.hit(2);
  testBoard.ships.carrier.hit(3);
  testBoard.ships.carrier.hit(4);
  testBoard.ships.battleship.hit(0);
  testBoard.ships.battleship.hit(1);
  testBoard.ships.battleship.hit(2);
  testBoard.ships.battleship.hit(3);
  testBoard.ships.destroyer.hit(0);
  testBoard.ships.destroyer.hit(1);
  testBoard.ships.destroyer.hit(2);
  testBoard.ships.submarine.hit(0);
  testBoard.ships.submarine.hit(1);
  testBoard.ships.submarine.hit(2);
  testBoard.ships.patrolboat.hit(0);
  testBoard.ships.patrolboat.hit(1);
  expect(testBoard.endGameHandler()).toEqual('Game over!')
});