const ship = (shipLength) => {
  const shipArray = [];
  for (i = 0; i < shipLength; i++) {
    shipArray.push(0);
  };
  const hit = (n) => {
    shipArray[n - 1] = 1;
  };
  const isSunk = () => {
    const shipHitsArray = shipArray.reduce(
      (prev, cur) => prev + cur);
      if (shipHitsArray === shipArray.length) {
        return 'deth';
      };
  };
  return { shipArray, hit, isSunk }
};

const gameBoard = () => {
  const boardArray = [];
  for (i = 0; i < 100; i++) {
    boardArray.push([]);
  }
  const ships = {
    carrier: ship(5),
    battleship: ship(4),
    destroyer: ship(3),
    submarine: ship(3),
    patrolboat: ship(2)
  };
  const placeShip = (shipType, orientation, location) => {
    if (shipType.shipArray.length >= 5 && location > 59) {
      throw 'Out of bounds!'
    } else if (shipType.shipArray.length >= 4 && location > 69) {
      throw 'Out of bounds!'
    } else if (shipType.shipArray.length >= 3 && location > 79) {
      throw 'Out of bounds!'
    } else if (shipType.shipArray.length >= 2 && location > 89) {
      throw 'Out of bounds!'
    } 
    if (orientation === 0) {
      let n = -10;
      for (i = 0; i < shipType.shipArray.length; i++) {
          n += 10;
          boardArray[location + n].push(shipType);
      };
    };
  };
  return { boardArray, ships, placeShip }
};

const playerBoard = gameBoard();

module.exports = { ship, gameBoard, playerBoard };