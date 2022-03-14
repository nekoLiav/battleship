const ship = (shipLength) => {
  // array consists of number of indexes equal to ship parameter
  // every index contains a zero to start
  const shipArray = [];
  for (i = 0; i < shipLength; i++) {
    shipArray.push(0);
  }
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
      }
  };
  return { shipArray, hit, isSunk }
};

const gameBoard = () => {
  // array consists of 100 sub arrays
  // each 10 sub arrays contains numbers 0-9
  const boardArray = [];
  for (i = 0, x = 0, y = 0; i < 100; i++, x++) {
    if (x === 10) {
      x = 0;
    }
    if (i === 90) {
      y = 9;
    } else if (i === 80) {
      y = 8;
    } else if (i === 70) {
      y = 7;
    } else if (i === 60) {
      y = 6;
    } else if (i === 50) {
      y = 5;
    } else if (i === 40) {
      y = 4;
    } else if (i === 30) {
      y = 3;
    } else if (i === 20) {
      y = 2;
    } else if (i === 10) {
      y = 1;
    }
    boardArray.push([x, y]);
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
      boardArray[location][0] >= 6 || boardArray[location][1] >= 6) {
      throw 'Out of bounds!';
    } else if (shipType.shipArray.length >= 4 && 
      boardArray[location][0] >= 7 || boardArray[location][1] >= 7) {
      throw 'Out of bounds!';
    } else if (shipType.shipArray.length >= 3 && 
      boardArray[location][0] >= 8 || boardArray[location][1] >= 8) {
      throw 'Out of bounds!';
    } else if (shipType.shipArray.length >= 2 && 
      boardArray[location][0] >= 9 || boardArray[location][1] >= 9) {
      throw 'Out of bounds!';
    }
    // orientation of 0 indicates vertical placement
    if (orientation === 0) {
      for (i = 0, n = 0; i < shipType.shipArray.length; i++, n += 10) {
          boardArray[location + n].push(shipType);
      }
    }
    // orientation of 1 indicates horizontal placement
    if (orientation === 1) {
      for (i = 0; i < shipType.shipArray.length; i++) {
        boardArray[location + i].push(shipType);
      }
    }
  };
  const receiveAttack = (x, y) => {
    let coords = [x, y];
    for (i = 0; i < boardArray.length; i++) {
      if (boardArray[i][0] == coords[0] && boardArray[i][1] == coords[1]) {
        return(i);
      }
    }
  };
  return { boardArray, ships, placeShip, receiveAttack }
};

module.exports = { gameBoard };