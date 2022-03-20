const shipFactory = (shipLength, shipType) => {

  const type = shipType;

  const shipArray = [];
  for (let i = 0; i < shipLength; i++) {
    shipArray.push(0);
  }

  const hit = (n) => {
    shipArray[n] = 1;
    isSunk();
  };
  // if the sum of all ship array elements are equal to its length, it is sunk
  const isSunk = () => {
    const shipHitsArray = shipArray.reduce(
      (acc, cur) => acc + cur);
      if (shipHitsArray === shipArray.length) {
        console.log('You sunk my ' + shipType + '!');
      }
  };

  return { type, shipArray, hit, isSunk }
  
};

export { shipFactory };