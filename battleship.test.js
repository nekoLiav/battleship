const { gameBoard } = require('./battleship');

test('shipArray is declared with quantity of indexes equivalent to argument, and contains only 0s', () => {
  const testBoard = gameBoard();
  expect(testBoard.ships.destroyer.shipArray).toEqual([0, 0, 0]);
});

test('hit method affects shipArray correctly by flipping the index of (argument - 1) to a 1 (the - 1 is to correct for zero based indexing)', () => {
  const testBoard = gameBoard();
  testBoard.ships.destroyer.hit(1);
  expect(testBoard.ships.destroyer.shipArray).toEqual([1, 0, 0]);
});

test('isSunk method returns "deth" when shipArray contains all 1s', () => {
  const testBoard = gameBoard();
  testBoard.ships.destroyer.hit(1);
  testBoard.ships.destroyer.hit(2);
  testBoard.ships.destroyer.hit(3);
  expect(testBoard.ships.destroyer.isSunk()).toBe('deth');
});

test('placeShip function adds ship information to indicated array index', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  expect(testBoard.boardArray[0]).toEqual([0, testBoard.ships.destroyer]);
});

test('placeShip function adds ship information to all indexes it should occupy with vertical orientation', () => {
  const testBoard = gameBoard();
  testBoard.placeShip(testBoard.ships.destroyer, 0, 0);
  expect(testBoard.boardArray[0] && testBoard.boardArray[10] && testBoard.boardArray[20]).toEqual([0, testBoard.ships.destroyer]);
});

test('placeShip throws an error if a carrier would be placed out of bounds in vertical orientation', () => {
  const testBoard = gameBoard();
  expect(() => {
    testBoard.placeShip(testBoard.ships.carrier, 0, 60);
  }).toThrow();
});

test('placeShip throws an error if a battleship would be placed out of bounds in vertical orientation', () => {
  const testBoard = gameBoard();
  expect(() => {
    testBoard.placeShip(testBoard.ships.battleship, 0, 70);
  }).toThrow();
});

test('placeShip throws an error if a destroyer would be placed out of bounds in vertical orientation', () => {
  const testBoard = gameBoard();
  expect(() => {
    testBoard.placeShip(testBoard.ships.destroyer, 0, 80);
  }).toThrow();
});

test('placeShip throws an error if a submarine would be placed out of bounds in vertical orientation', () => {
  const testBoard = gameBoard();
  expect(() => {
    testBoard.placeShip(testBoard.ships.submarine, 0, 80);
  }).toThrow();
});

test('placeShip throws an error if a patrol boat would be placed out of bounds in vertical orientation', () => {
  const testBoard = gameBoard();
  expect(() => {
    testBoard.placeShip(testBoard.ships.patrolboat, 0, 90);
  }).toThrow();
});