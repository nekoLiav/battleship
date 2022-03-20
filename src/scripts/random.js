export default function random(ship, arguer) {

  let randomOrientation = Math.floor(Math.random() * 2);

  let validX = [];
  let validY = [];
  let randomCoords = [];

if (randomOrientation === 0) {
  for (let i = 0; i < arguer.boardArray.length; i++) {
    // out of bounds detection by way of shrinking searchable board space to valid X coordinate constraints
    if (arguer.boardArray[i][0] <= (10 - ship.shipArray.length)) {
      // length of 3 implies an empty array space, checks all spaces a piece would occupy
      for (let n = 0, x = 0; n < ship.shipArray.length; n++) {
        if (arguer.boardArray[i + n].length === 3) {
          x++;
        }
        // if all spaces the ship would occupy are empty, push the x, y coordinates as a valid location to select randomly
        if (x === ship.shipArray.length) {
          validX.push([arguer.boardArray[i][0], arguer.boardArray[i][1]]);
        }
      }
    }
    // random over array of valid coordinates to find our selection
  } randomCoords = validX[Math.floor(Math.random() * validX.length)];
}

if (randomOrientation === 1) {
  for (let i = 0; i < arguer.boardArray.length; i++) {
    if (arguer.boardArray[i][1] <= (10 - ship.shipArray.length)) {
      for (let n = 0, v = 0, y = 0; n < ship.shipArray.length; n++, v += 10) {
        if (arguer.boardArray[i + v].length === 3) {
          y++;
        }
        if (y === ship.shipArray.length) {
          validY.push([arguer.boardArray[i][0], arguer.boardArray[i][1]]);
        }
      }
    }
  } randomCoords = validY[Math.floor(Math.random() * validY.length)];
}
  arguer.placeShip(ship, randomOrientation, randomCoords[0], randomCoords[1]);
}