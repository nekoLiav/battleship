const ship = (shipLength) => {
  // array consists of number of indexes equal to ship parameter
  // every index contains a zero to start
  const shipArray = [];
  for (i = 0; i < shipLength; i++) {
    shipArray.push(0);
  };
  // flips the index to a one upon hit detection
  // n parameter indicates index hit
  // - 1 is for zero based indexing correction
  const hit = (n) => {
    shipArray[n - 1] = 1;
  };
  // sums shipArray, compares sum to array length
  // if array length is equal, this implies it is filled with ones
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
  // array consists of 100 sub arrays
  // each 10 sub arrays contains numbers 0-9
  const boardArray = [];
  for (i = 0, n = 0; i < 100; i++, n++) {
    if (n === 10) {
      n = 0;
    }
    boardArray.push([n]);
  }
  const ships = {
    carrier: ship(5),
    battleship: ship(4),
    destroyer: ship(3),
    submarine: ship(3),
    patrolboat: ship(2)
  };
  const placeShip = (shipType, orientation, location) => {
    // raw location checks vertical orientation error, 
    // boardArray[location][index] checks horizontal orientation error
    if (shipType.shipArray.length >= 5 && 
      location > 59 || boardArray[location][0] >= 6) {
      throw 'Out of bounds!';
    } else if (shipType.shipArray.length >= 4 && 
      location > 69 || boardArray[location][0] >= 7) {
      throw 'Out of bounds!';
    } else if (shipType.shipArray.length >= 3 && 
      location > 79 || boardArray[location][0] >= 8) {
      throw 'Out of bounds!';
    } else if (shipType.shipArray.length >= 2 && 
      location > 89 || boardArray[location][0] >= 9) {
      throw 'Out of bounds!';
    };
    // orientation of 0 indicates vertical placement
    if (orientation === 0) {
      for (i = 0, n = 0; i < shipType.shipArray.length; i++, n += 10) {
          boardArray[location + n].push(shipType);
      };
    };
    // orientation of 1 indicates horizontal placement
    if (orientation === 1) {
      for (i = 0; i < shipType.shipArray.length; i++) {
        boardArray[location + i].push(shipType);
      }
    };
  };
  return { boardArray, ships, placeShip }
};

module.exports = { gameBoard };