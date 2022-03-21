export default function random(ship, player) {

  let randomOrientation = Math.floor(Math.random() * 2);

  let validX = [];
  let validY = [];
  let randomCoords = [];

if (randomOrientation === 0) {
  for (let i = 0; i < player.boardArray.length; i++) {
    // out of bounds detection by way of shrinking searchable board space to valid X coordinate constraints
    if (player.boardArray[i][0] <= (10 - ship.shipArray.length)) {
      // length of 3 implies an empty array space, checks all spaces a piece would occupy
      for (let n = 0, x = 0; n < ship.shipArray.length; n++) {
        if (player.boardArray[i + n].length === 3) {
          x++;
        }
        // if all spaces the ship would occupy are empty, push the x, y coordinates as a valid location to select randomly
        if (x === ship.shipArray.length) {
          validX.push([player.boardArray[i][0], player.boardArray[i][1]]);
        }
      }
    }
    // random over array of valid coordinates to find our selection
  } randomCoords = validX[Math.floor(Math.random() * validX.length)];
}

if (randomOrientation === 1) {
  for (let i = 0; i < player.boardArray.length; i++) {
    if (player.boardArray[i][1] <= (10 - ship.shipArray.length)) {
      for (let n = 0, v = 0, y = 0; n < ship.shipArray.length; n++, v += 10) {
        if (player.boardArray[i + v].length === 3) {
          y++;
        }
        if (y === ship.shipArray.length) {
          validY.push([player.boardArray[i][0], player.boardArray[i][1]]);
        }
      }
    }
  } randomCoords = validY[Math.floor(Math.random() * validY.length)];
}
  player.placeShip(ship, randomOrientation, randomCoords[0], randomCoords[1]);
}