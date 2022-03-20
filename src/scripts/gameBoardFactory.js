const gameBoardFactory = () => {

  const boardArray = [];

  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    boardArray.push([x, y, 0]);
  }

  const placeShip = (ship, orientation, x, y) => {
    let locationXY = [x, y];
    let locationIndex = 0;
    for (let i = 0; i < boardArray.length; i++) {
      if (boardArray[i][0] == locationXY[0] && boardArray[i][1] == locationXY[1]) {
        locationIndex = i;
      }
    }
    // orientation of 0 indicates horizontal placement
    if (orientation === 0) {
      for (let i = 0; i < ship.shipArray.length; i++) {
        boardArray[locationIndex + i].push(ship.type, i);
      }
    }
    // orientation of 1 indicates vertical placement
    if (orientation === 1) {
      for (let i = 0, n = 0; i < ship.shipArray.length; i++, n += 10) {
          boardArray[locationIndex + n].push(ship.type, i);
      }
    }
  };

  const receiveAttack = (x, y) => {
    let coords = [x, y];
    for (let i = 0; i < boardArray.length; i++) {
      if (boardArray[i][0] == coords[0] && boardArray[i][1] == coords[1]) {
        boardArray[i][2] = 1;
        if (boardArray[i][3] === 'carrier') {
          ships.carrier.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'battleship') {
          ships.battleship.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'destroyer') {
          ships.destroyer.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'submarine') {
          ships.submarine.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'patrol boat') {
          ships.patrolboat.hit(boardArray[i][4]);
        }
      }
    } endGameHandler();
  };

  return { boardArray, placeShip, receiveAttack }

};

export { gameBoardFactory };