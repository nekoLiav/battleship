import { player } from "./players";

export default function random(ship) {

  let randomOrientation = Math.floor(Math.random() * 2);

  let validX = [];
  let validY = [];
  let randomCoords = [];

if (randomOrientation === 0) {
  for (let i = 0; i < player.boardArray.length; i++) {
    if (player.boardArray[i][0] <= (10 - ship.shipArray.length)) {
      for (let n = 0, x = 0; n < ship.shipArray.length; n++) {
        if (player.boardArray[i + n].length === 3) {
          x++;
        }
        if (x === ship.shipArray.length) {
          validX.push([player.boardArray[i][0], player.boardArray[i][1]]);
        }
      }
    }
  } randomCoords = validX[Math.floor(Math.random() * validX.length)];
}

if (randomOrientation === 1) {
  for (let i = 0; i < player.boardArray.length; i++) {
    if (player.boardArray[i][1] <= (10 - ship.shipArray.length)) {
      for (let n = 0, m = 0, y = 0; n < ship.shipArray.length; n++, m += 10) {
        if (player.boardArray[i + m].length === 3) {
          y++;
        }
        if (y === ship.shipArray.length) {
          validY.push([player.boardArray[i][0], player.boardArray[i][1]]);
        }
      }
    }
  } randomCoords = validY[Math.floor(Math.random() * validY.length)];
}
  console.log(player.boardArray);
  player.placeShip(ship, randomOrientation, randomCoords[0], randomCoords[1]);
}