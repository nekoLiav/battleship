import { computer } from '../game/players';

export default function autoPlace(ship) {
  const randomOrientation = Math.floor(Math.random() * 2);
  const validX = [];
  const validY = [];
  let randomCoords = [];

  if (randomOrientation === 0) {
    for (let i = 0; i < computer.boardArray.length; i += 1) {
      if (computer.boardArray[i][0] <= (10 - ship.length)) {
        for (let l = 0, x = 0; l < ship.length; l += 1) {
          if (computer.boardArray[i + l].length === 3) {
            x += 1;
          }
          if (x === ship.length) {
            validX.push([computer.boardArray[i][0], computer.boardArray[i][1]]);
          }
        }
      }
    } randomCoords = validX[Math.floor(Math.random() * validX.length)];
  }

  if (randomOrientation === 1) {
    for (let i = 0; i < computer.boardArray.length; i += 1) {
      if (computer.boardArray[i][1] <= (10 - ship.length)) {
        for (let l = 0, v = 0, y = 0; l < ship.length; l += 1, v += 10) {
          if (computer.boardArray[i + v].length === 3) {
            y += 1;
          }
          if (y === ship.length) {
            validY.push([computer.boardArray[i][0], computer.boardArray[i][1]]);
          }
        }
      }
    } randomCoords = validY[Math.floor(Math.random() * validY.length)];
  }

  computer.placeShip(ship, randomOrientation, randomCoords[0], randomCoords[1]);
}
