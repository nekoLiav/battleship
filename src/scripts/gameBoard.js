import { ship } from "./ship";

const gameBoard = () => {
  const boardArray = [];
  // Populate boardArray with 3 values: x, y coordinates,
  // and 0s to flip for hit/miss detection
  for (let i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
      y += 1;
    }
    boardArray.push([x, y, 0]);
  }
  // Ship factory goes brrrrrrrrrrrrr
  const ships = {
    carrier: ship(5, 'carrier'),
    battleship: ship(4, 'battleship'),
    destroyer: ship(3, 'destroyer'),
    submarine: ship(3, 'submarine'),
    patrolboat: ship(2, 'patrol boat')
  };
  const placeShip = (ship, orientation, x, y) => {
    let locationXY = [x, y];
    let locationIndex = 0;
    for (let i = 0; i < boardArray.length; i++) {
      if (boardArray[i][0] == locationXY[0] && boardArray[i][1] == locationXY[1]) {
        locationIndex = i;
      }
    }
    // Orientation of 0 indicates horizontal placement
    if (orientation === 0) {
      for (let i = 0; i < ship.shipArray.length; i++) {
        boardArray[locationIndex + i].push(ship.type, i);
      }
    }
    // Orientation of 1 indicates vertical placement
    if (orientation === 1) {
      for (let i = 0, n = 0; i < ship.shipArray.length; i++, n += 10) {
          boardArray[locationIndex + n].push(ship.type, i);
      }
    }
  };
  // Target boardArray index based on x, y parameters
  const receiveAttack = (x, y) => {
    let coords = [x, y];
    for (let i = 0; i < boardArray.length; i++) {
      if (boardArray[i][0] == coords[0] && boardArray[i][1] == coords[1]) {
        boardArray[i][2] = 1;
        // Clumsy way of detecting which type of ship was hit, need to improve this
        // Will probably end up using a reverse lookup within ships object
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
  const endGameHandler = () => {
    if (
      ships.carrier.isSunk() === 'deth' &&
      ships.carrier.isSunk() === 'deth' &&
      ships.carrier.isSunk() === 'deth' &&
      ships.carrier.isSunk() === 'deth' &&
      ships.carrier.isSunk() === 'deth'
    ) {
      return('Game over!');
    }
  };
  return { boardArray, ships, placeShip, receiveAttack, endGameHandler }
};

export { gameBoard };