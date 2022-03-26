import { computer } from './players';

export default function randomPlace(ship) {
  const randomDirection = Math.floor(Math.random() * 2);
  const validX = [];
  const validY = [];
  let randomCoords = [];

  if (randomDirection === 0) {
    for (let i = 0; i < computer.board.length; i += 1) {
      if (computer.board[i][0] <= (10 - ship.length)) {
        for (let l = 0, x = 0; l < ship.length; l += 1) {
          if (computer.board[i + l].length === 3) {
            x += 1;
          }
          if (x === ship.length) {
            validX.push([computer.board[i][0], computer.board[i][1]]);
          }
        }
      }
    } randomCoords = validX[Math.floor(Math.random() * validX.length)];
  }

  if (randomDirection === 1) {
    for (let i = 0; i < computer.board.length; i += 1) {
      if (computer.board[i][1] <= (10 - ship.length)) {
        for (let l = 0, v = 0, y = 0; l < ship.length; l += 1, v += 10) {
          if (computer.board[i + v].length === 3) {
            y += 1;
          }
          if (y === ship.length) {
            validY.push([computer.board[i][0], computer.board[i][1]]);
          }
        }
      }
    } randomCoords = validY[Math.floor(Math.random() * validY.length)];
  }

  computer.placeShip(ship, randomDirection, randomCoords[0], randomCoords[1]);
}
