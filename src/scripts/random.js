export default function random(ship, player) {
  const randomOrientation = Math.floor(Math.random() * 2);
  const validX = [];
  const validY = [];
  let randomCoords = [];

  if (randomOrientation === 0) {
    for (let i = 0; i < player.boardArray.length; i += 1) {
      if (player.boardArray[i][0] <= (10 - ship.length)) {
        for (let n = 0, x = 0; n < ship.length; n += 1) {
          if (player.boardArray[i + n].length === 3) {
            x += 1;
          }
          if (x === ship.length) {
            validX.push([player.boardArray[i][0], player.boardArray[i][1]]);
          }
        }
      }
    } randomCoords = validX[Math.floor(Math.random() * validX.length)];
  }

  if (randomOrientation === 1) {
    for (let i = 0; i < player.boardArray.length; i += 1) {
      if (player.boardArray[i][1] <= (10 - ship.length)) {
        for (let n = 0, v = 0, y = 0; n < ship.length; n += 1, v += 10) {
          if (player.boardArray[i + v].length === 3) {
            y += 1;
          }
          if (y === ship.length) {
            validY.push([player.boardArray[i][0], player.boardArray[i][1]]);
          }
        }
      }
    } randomCoords = validY[Math.floor(Math.random() * validY.length)];
  }

  player.placeShip(ship, randomOrientation, randomCoords[0], randomCoords[1]);
}
