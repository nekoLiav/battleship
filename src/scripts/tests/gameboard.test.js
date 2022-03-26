/* eslint-disable no-undef */
import gameBoard from '../factories/gameBoard';
import ship from '../factories/ship';

const testBoard = gameBoard();
const testShip = ship(7, 'reallybigshipthatgoespewpew', 'billy');

test('board array contains 100 subarrays, each containing an x, y coordinate and a value indicating whether the space has been attacked (0 or 1)', () => {
  expect(testBoard.board[13]).toEqual([3, 1, 0]);
});

test('when ship is placed, it occupies the intended number of spaces horizontally', () => {
  testBoard.placeShip(testShip, 0, 0, 0);
  expect(testBoard.board[0][3]
    && testBoard.board[1][3]
    && testBoard.board[2][3]
    && testBoard.board[3][3]
    && testBoard.board[4][3]
    && testBoard.board[5][3]
    && testBoard.board[6][3]).toEqual(
    'reallybigshipthatgoespewpew',
  );
});

test('when ship is placed, it occupies the intended number of spaces vertically', () => {
  testBoard.placeShip(testShip, 1, 0, 0);
  expect(testBoard.board[0][3]
    && testBoard.board[10][3]
    && testBoard.board[20][3]
    && testBoard.board[30][3]
    && testBoard.board[40][3]
    && testBoard.board[50][3]
    && testBoard.board[60][3]).toEqual(
    'reallybigshipthatgoespewpew',
  );
});

test('board array responds as intended when attacked', () => {
  testBoard.receiveAttack(13);
  expect(testBoard.board[13][2]).toEqual(1);
});
