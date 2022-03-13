//ship factory function tests
const { ship, gameBoard } = require('./battleship');

test('shipArray is declared with quantity of indexes equivalent to argument, and they contain 0s', () => {
  const destroyer = ship(2);
  expect(destroyer.shipArray).toEqual([0, 0]);
});

test('hit method affects shipArray correctly by flipping the index of (argument - 1) to a 1 (the - 1 is to correct for zero based indexing)', () => {
  const destroyer = ship(2);
  destroyer.hit(1);
  expect(destroyer.shipArray).toEqual([1, 0]);
});

test('isSunk method returns "deth" when shipArray contains all 1s', () => {
  const destroyer = ship(2);
  destroyer.hit(1);
  destroyer.hit(2);
  expect(destroyer.isSunk()).toBe('deth');
});

test('placeShip function adds ship information to indicated array index', () => {
  const playerOneBoard = gameBoard();
  const destroyer = ship(3);
  playerOneBoard.placeShip(destroyer, 0, 0);
  expect(playerOneBoard.boardArray[0]).toEqual([destroyer]);
});

test('placeShip function adds ship information to all indexes it should occupy with vertical orientation', () => {
  const playerOneBoard = gameBoard();
  const destroyer = ship(3);
  playerOneBoard.placeShip(destroyer, 0, 0);
  expect(playerOneBoard.boardArray[0] && playerOneBoard.boardArray[10] && playerOneBoard.boardArray[20]).toEqual([destroyer]);
});

test('placeShip throws an error if the location argument would results in an invalid placement, i.e. part of the piece would be off the board with vertical orientation', () => {
  const playerOneBoard = gameBoard();
  const destroyer = ship(3);
  expect(playerOneBoard.placeShip(destroyer, 0, 80)).toEqual('Error!');
});