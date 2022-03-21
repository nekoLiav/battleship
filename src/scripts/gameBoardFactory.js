import { shipFactory } from "./shipFactory";

const gameBoardFactory = (name) => {

  const owner = name;

  const boardArray = [];

  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    boardArray.push([x, y, 0]);
  }

  const boardShips = {
    carrier: shipFactory(5, 'carrier', owner),
    battleship: shipFactory(4, 'battleship', owner),
    destroyer: shipFactory(3, 'destroyer', owner),
    submarine: shipFactory(3, 'submarine', owner),
    patrolboat: shipFactory(2, 'patrol boat', owner),
  };

  const placeShip = (ship, orientation, x, y, owner) => {
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
        boardArray[locationIndex + i].push(ship.type, i, owner);
      }
    }
    // orientation of 1 indicates vertical placement
    if (orientation === 1) {
      for (let i = 0, n = 0; i < ship.shipArray.length; i++, n += 10) {
          boardArray[locationIndex + n].push(ship.type, i, owner);
      }
    }
  };

  const receiveAttack = (x, y) => {
    let coords = [x, y];
    for (let i = 0; i < boardArray.length; i++) {
      if (boardArray[i][0] == coords[0] && boardArray[i][1] == coords[1]) {
        boardArray[i][2] = 1;
        if (boardArray[i][3] === 'carrier') {
          boardShips.carrier.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'battleship') {
          boardShips.battleship.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'destroyer') {
          boardShips.destroyer.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'submarine') {
          boardShips.submarine.hit(boardArray[i][4]);
        } else if (boardArray[i][3] === 'patrol boat') {
          boardShips.patrolboat.hit(boardArray[i][4]);
        }
      }
    } sunkShips();
  };

  const sunkShips = () => {
    let sunkCounter = 0;
    if (boardShips.carrier.isSunk() === true) {
      sunkCounter++;
    }
    if (boardShips.battleship.isSunk() === true) {
      sunkCounter++;
    }
    if (boardShips.destroyer.isSunk() === true) {
      sunkCounter++;
    }
    if (boardShips.submarine.isSunk() === true) {
      sunkCounter++;
    }
    if (boardShips.patrolboat.isSunk() === true) {
      sunkCounter++;
    } return sunkCounter;
  }

  return { boardShips, boardArray, placeShip, receiveAttack, sunkShips }

};

export { gameBoardFactory };