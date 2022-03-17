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
  // This if/else block detects invalid/out of bounds ship placements
  const placeShip = (ship, orientation, location) => {
    if (ship.shipArray.length >= 5 && 
      boardArray[location][0] >= 6 || boardArray[location][1] >= 6) {
      throw 'Out of bounds!';
    } else if (ship.shipArray.length >= 4 && 
      boardArray[location][0] >= 7 || boardArray[location][1] >= 7) {
      throw 'Out of bounds!';
    } else if (ship.shipArray.length >= 3 && 
      boardArray[location][0] >= 8 || boardArray[location][1] >= 8) {
      throw 'Out of bounds!';
    } else if (ship.shipArray.length >= 2 && 
      boardArray[location][0] >= 9 || boardArray[location][1] >= 9) {
      throw 'Out of bounds!';
    }
    // Orientation of 0 indicates vertical placement
    if (orientation === 0) {
      for (let i = 0, n = 0; i < ship.shipArray.length; i++, n += 10) {
          boardArray[location + n].push(ship.type, i);
      }
    }
    // Orientation of 1 indicates horizontal placement
    if (orientation === 1) {
      for (let i = 0; i < ship.shipArray.length; i++) {
        boardArray[location + i].push(ship.type, i);
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